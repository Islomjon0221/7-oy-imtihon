import "./index.css"
import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"


function Register() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const repassword = useRef()

  function validate() {
    if (!username.current.value.length) {
      username.current.focus()
      alert("Username is null")
      return false
    }

    if (!email.current.value.length) {
      email.current.focus()
      alert("Email is null")
      return false
    }

    if (!password.current.value.length) {
      password.current.focus()
      alert("Password is null")
      return false
    }

    if (!repassword.current.value.length) {
      repassword.current.focus()
      alert("Repeat password is null")
      return false
    }

    if (password.current.value != repassword.current.value) {
      alert("password does not match")
      password.current.focus()
      return false
    }
    return true
  }

  function handleRegister(e) {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      setIsLoading(true)
      fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.message == "User registered successfully!") {
            navigate("/login")
          }

          if (data.message == "Failed! Username is already in use!") {
            alert(data.message)
            return
          }

          if (data.message == "Failed! Email is already in use!") {
            alert(data.message)
            return
          }
        }
        )
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <div className="register-wrapper">
      <form className="register-form">
        <h3 className="register-title">Sign Up</h3>
        <input ref={username} type="text" placeholder="Username" />
        <input ref={email} type="email" placeholder="Email address" />
        <input ref={password} type="password" placeholder="Password" />
        <input ref={repassword} type="password" placeholder="Repeat password" />
        <button onClick={handleRegister} disabled={isLoading ? true : false}>{isLoading ? "Loading..." : "Create an account"}</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Register