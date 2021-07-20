import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContexts'
import './Sign_up.css'
import {Link, useHistory} from 'react-router-dom'


export default function UpdateProfile() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmpasswordRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== 
        confirmpasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises =[]
        if (emailRef.current.value!==currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        promises.all(promises).then(() => {
            history.push('/')
        }).catch(() =>{
            setError('Failed to Update Account')
        }).finally(() => {
            setLoading("false")
        })
    }

    return (
        <>
        <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
            <Card className="topcon">
                <Card.Body className="container">
                    <h1>Update Profile</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control className="form-top" type="email" ref={emailRef} required placeholder="Email" defaultValue={currentUser.email}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Control className="form-mid" type="password" ref={passwordRef} placeholder="Enter new Password"/>
                            </Form.Group>
                            <Form.Group id="confirmpassword">
                                <Form.Control className="form-end" type="password" ref={confirmpasswordRef} placeholder="Confirm Password"/>
                            </Form.Group>
                        <Button disabled={loading} className="btn" type="submit">Sign Up</Button>
                    </Form>
                    <div className="foot">
                        <Link to="/" className="links">Cancel</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
