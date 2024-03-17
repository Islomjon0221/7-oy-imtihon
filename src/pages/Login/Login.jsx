import "./index.css"
import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"


function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const username = useRef()
  const password = useRef()

  function validate() {
    if (!username.current.value.length) {
      username.current.focus()
      alert("Username is null")
      return false
    }

   
    if (!password.current.value.length) {
      password.current.focus()
      alert("Password is null")
      return false
    }


    return true
  }

  function handleLogin(e) {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      const user = {
        username: username.current.value,
        password: password.current.value
      }
      setIsLoading(true)
      fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          if(data.id) {
            localStorage.setItem("token", data.accessToken)
            localStorage.setItem("user", JSON.stringify(data))
            navigate('/')
          }
          if(data.message == "User Not found." || data.message == "Invalid password!") {
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
    <div className="login-wrapper">
      <form className="login-form">
        <h3 className="login-title">Login</h3>
        <input ref={username} type="text" placeholder="Username" />
        <input ref={password} type="password" placeholder="Password" />
        <button onClick={handleLogin} disabled={isLoading ? true : false}>{isLoading ? "Loading..." : "Login to your account"}</button>
        <p>Don’t have an account? <Link to="/register">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login