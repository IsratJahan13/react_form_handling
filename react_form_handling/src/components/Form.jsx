import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required('Your full name is required'),
    email: yup.string().email().required('Please enter an email'),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required('Please eneter a password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords don't match")
      .required('Please eneter a password'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Full name..."
          {...register('fullName')}
        />
        <p style={{ color: 'red' }}>{errors.fullName?.message}</p>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" placeholder="Email..." {...register('email')} />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>
      </div>
      <div>
        <label>Age:</label>
        <input type="number" placeholder="Age..." {...register('age')} />
        <p style={{ color: 'red' }}>{errors.age?.message}</p>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password..."
          {...register('password')}
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>
      </div>
      <div>
        <label>Confirm password:</label>
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register('confirmPassword')}
        />
        <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
      </div>
      <input type="submit" />
    </form>
  )
}

export default Form
