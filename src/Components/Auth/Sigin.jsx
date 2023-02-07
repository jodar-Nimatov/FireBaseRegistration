import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

const Sigin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential)
        }).catch((error) => {
          console.log(error)
        })
        setEmail('')
        setPassword('')
    }


  return (
    <div className='form-container'>
        <form onSubmit={signIn}>
            <h1>Log In</h1>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <br />
            <input type="password"  placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <br />
            <button type='submit'>Sing In</button>
            <br />
            <br />
            <span>Don't have ac account?</span> <Link to="/signup">Sing Up</Link>
        </form>
    </div>
  )
}

export default Sigin