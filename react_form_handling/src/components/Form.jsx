import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required,
    email: yup.string().email().required,
    age: yup.number().positive().integer().min(18).required,
    password: yup.string().min(4).max(20).required,
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required,
  })

  const { register, handleSubmit } = useForm({
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
      </div>
      <div>
        <label>Email:</label>
        <input type="text" placeholder="Email..." {...register('email')} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" placeholder="Age..." {...register('age')} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password..."
          {...register('password')}
        />
      </div>
      <div>
        <label>Confirm password:</label>
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register('confirmPassword')}
        />
      </div>
      <input type="submit" />
    </form>
  )
}

export default Form
