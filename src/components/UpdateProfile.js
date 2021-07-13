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
            <Card>
                <Card.Body class="container">
                    <h1>Update Profile</h1>
                    {error && <Alert variant="danger"> {error} </Alert>}
                    <img className="logo" alt="Social Vue" src="https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png" />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Control type="email" ref={emailRef} required placeholder="Email" defaultValue={currentUser.email}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Control classNAme="input" type="password" ref={passwordRef} placeholder="Leave Blank to keep the Same"/>
                            </Form.Group>
                            <Form.Group id="confirmpassword">
                                <Form.Control type="password" ref={confirmpasswordRef} placeholder="Leave Blank to keep the Same"/>
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
