import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("");

  return (
    <>
      <div>Login</div>
      <div>Enter you email : </div>
      <input></input>
    </>
  );
}

export default Login