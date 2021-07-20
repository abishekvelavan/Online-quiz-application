import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert} from "react-bootstrap"
import { useAuth } from '../contexts/AuthContexts'
import './Sign_up.css'
import {Link, useHistory} from 'react-router-dom'


export default function Signup() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

     async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== 
        confirmpasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to Create an Account')
        }
        setLoading(false)
    }

    return (

        /*<div className="topcon">
            <div className="container">
            <h1>Sign Up</h1>
            {error && <Alert variant="danger"> {error} </Alert>}
            <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            <form onSubmit={handleSubmit}>
                <div>
                    <input className="form-top" type="text" required placeholder="Name"/>
                </div>
                <div>
                    <input className="form-mid" type="email" ref={emailRef} required placeholder="Email"/>
                </div>
                <div>
                    <input className="form-mid" type="password" ref={passwordRef} required placeholder="Password"/>
                </div>
                <div>
                    <input className="form-end" type="password" ref={passwordRef} required placeholder="Confirm Password"/>
                </div>
                <div>
                    <button className="btn" disabled={loading} type="submit">Sign UP</button>
                </div>
                <div className="foot">
                    Already have an account? <Link to="/login" className="links">Log In</Link>
                </div>
            </form>
        </div>
    </div>*/
        <>
        <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            <Card className="topcon">
                <Card.Body class="container">
                    <h1>Sign Up</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control className="form-top" type="email" ref={emailRef} required placeholder="Email"/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control className="form-mid" type="password" ref={passwordRef} required placeholder="Password"/>
                        </Form.Group>
                        <Form.Group id="confirmpassword">
                            <Form.Control className="form-end" type="password" ref={confirmpasswordRef} required placeholder="Confirm Password"/>
                        </Form.Group>
                    </Form>
                    <Button disabled={loading} className="btn" type="submit">Sign Up</Button>
                    <div className="foot">
                        Already have an account? <Link to="/login" className="links">Log In</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
