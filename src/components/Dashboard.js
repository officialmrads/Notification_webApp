import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './Dashboard.css';
import Application from "./Application";


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (

    <div>
    
    <div className="header" > 
    {/* <div className="header-right"> */}
      {/* <a>Profile</a>
      {error && <Alert variant="danger">{error}</Alert>}
      <a>{currentUser.email}</a> */}
      
      <Button variant="outlined" className="sidebar__twee" onClick="./update-profile">Update Profile</Button>
      <Button variant="outlined" className="sidebar__twee" onClick={handleLogout}>Logout</Button>
    {/* </div> */}
    </div>
    
    <div className="next">

    <Application />

    </div>

</div>

    
  )
}
