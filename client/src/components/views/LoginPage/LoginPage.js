import Axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {
  // -- dispatch
  const dispatch = useDispatch();

  // -- state
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // -- 타자 입력 가능
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log('Email', Email);
    console.log('Password', Password);

    let body = {
      email: Email,
      password: Password
    };

    // -- dispatch 이용하여 action 예정
    dispatch(loginUser(body))
    .then(response => {
      if(response.payload.loginSuccess) {
        props.history.push('/')
      } else {
        alert('Error')
        console.log('Error');
      }
    })

    
  }
  
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{
        display: 'flex', flexDirection: 'column'
      }} onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type={'email'} value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type={'password'} value={Password} onChange={onPasswordHandler} />

        <br/>
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
