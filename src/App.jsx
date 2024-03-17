import "./fonts/Font.css"
import './App.css'
import { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Head from './pages/Head/Head'
import Speakers from "./pages/Speakers/Speakers"
import Earphon from "./pages/Earpoh/Earphon"
import Cart from "./pages/Cart/Cart"
import MainLayout from "./pages/Layout/MainLayout"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {

  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register" && location.pathname != "*") {
      navigate("/login")
    }
  }, [])


  function ProtectedRoute({ children, redirectTo = "/login", isAuthentication }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }

    return children
  }


  return (
    <Routes>
      {/* Public */}

      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>

      {/* Protected */}
      <Route path='/' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Home></Home>
          </MainLayout>
        </ProtectedRoute>
      }></Route> 

      <Route path='/headphones' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Head></Head>
          </MainLayout>
        </ProtectedRoute>
      }></Route> 

      <Route path='/speakers' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Speakers></Speakers>
          </MainLayout>
        </ProtectedRoute>
      }></Route> 

      <Route path='/earphones' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Earphon></Earphon>
          </MainLayout>
        </ProtectedRoute>
      }></Route> 

      <Route path='/cart' element={
        <ProtectedRoute isAuthentication={token ? true : false}>
          <MainLayout>
            <Cart></Cart>
          </MainLayout>
        </ProtectedRoute>
      }></Route> 

    </Routes>
  )
}

export default App
