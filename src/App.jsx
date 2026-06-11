import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
<<<<<<< HEAD
import MyResumes from './pages/MyResumes'

import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import { Toaster } from 'react-hot-toast'
=======
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165

const App = () => {

  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token')
<<<<<<< HEAD

    try {
      if (token) {
        const { data } = await api.get('/api/users/data', {
          headers: { Authorization: token }
        })

        if (data.user) {
          dispatch(login({ token, user: data.user }))
        }

        dispatch(setLoading(false))
      } else {
=======
    try {
      if(token){
        const { data } = await api.get('/api/users/data', {headers: {Authorization: token}})
        if(data.user){
          dispatch(login({token, user: data.user}))
        }
        dispatch(setLoading(false))
      }else{
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
        dispatch(setLoading(false))
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message)
    }
  }

<<<<<<< HEAD
  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-resumes" element={<MyResumes />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>

        <Route path="view/:resumeId" element={<Preview />} />
=======
  useEffect(()=>{
    getUserData()
  },[])

  return (
    <>
    <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='builder/:resumeId' element={<ResumeBuilder />}/>
        </Route>

        <Route path='view/:resumeId' element={<Preview />}/>

>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
      </Routes>
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 1200b9124667ff97b1ee242db0a797198649b165
