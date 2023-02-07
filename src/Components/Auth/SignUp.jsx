import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
        }).catch((error) => {
          console.log(error)
        })
    }


  return (
    <div className='form-container'>
        <form onSubmit={signUp}>
            <h1>Create Account</h1>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password"  placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <br />
            <button type='submit'>Log In</button>
            <br />
            <br />
            <span>Already have an account?</span> <Link to="/">Sing In</Link>
        </form>
    </div>
  )
}

export default SignUp