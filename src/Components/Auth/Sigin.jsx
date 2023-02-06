import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'

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
    }


  return (
    <div>
        <form onSubmit={signIn}>
            <h1>Log In</h1>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password"  placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Sigin