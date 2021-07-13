import React, { useState } from 'react'
import {Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContexts'
import './Sign_up.css'
export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.push('/login')

        }catch {
            setError('Failed to log out')

        }

    }

    return (
      <>
        <Card>
            <Card.Body>
                <h1>DashBoard-Profile</h1>
                {error && <Alert variant="danger"> {error} </Alert>}
                <p className="foot"><strong>Email: </strong>{currentUser.email}</p>
                <Link to="update-profile" className="btn">
                    Update Profile
                </Link>
            </Card.Body>
        </Card>
        <div className="foot">
            <Button className="btn" variant="link" onClick={handleLogout}>
                Log Out
            </Button>
        </div>
      </>  
    )
}
