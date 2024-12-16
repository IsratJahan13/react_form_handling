import React from 'react'

const Form = () => {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Full name..." />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" placeholder="Email..." />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" placeholder="Age..." />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder="Password..." />
      </div>
      <div>
        <label>Confirm password:</label>
        <input type="password" placeholder="Confirm Password..." />
      </div>
      <input type="submit" />
    </form>
  )
}

export default Form
