import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  
    const redirect_to_admin = () => {
      history.push('/signup')
    }
    
    const redirect_to_user = () => {
        history.push('/login')
    }

    return (
      <div>
        <button onClick={redirect_to_admin} className="btn btn-primary w-100 mt-3">Admin</button>      
        <button onClick={redirect_to_user} className="btn btn-primary w-100 mt-3">Voter</button>
      </div>
    )
  }