//@ts-check
import React from 'react'
import Footer from '../komponen/layout/user/footer'
import Link from 'next/link'
import { useState } from 'react'
export default function signup() {
    // const [id_cerita, setId] = useState('')
    const [nama, setNama] = useState('')
    const [tanggal_lahir, setTgl] = useState(null)
    const [jenis_kelamin, setJenis] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
 
    const clearInput = () => {
      setNama('')
      setTgl('')
      setJenis('')
      setUsername('')
      setPassword('')
      
    }
  
    async function submitHandler(e) {
      // setSubmitting(true)
      e.preventDefault()
      try {
        const res = await fetch('http://localhost:3000/api/input-usser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama,
            tanggal_lahir,
            jenis_kelamin,
            username,
            password
          }),
        })
        // setSubmitting(false)
        const json = await res.json()
        if (!res.ok) throw Error(json.message)
        // Router.push('/')
        alert("Penambahan Data Sukses")
        clearInput()
      } catch (e) {
        throw Error(e.message)
      }
    }
    return (
      <div>
      <form onSubmit={submitHandler} className="form-signin">
      <div className="text-center mb-4">
          <h1 className="h3 mb-3  font-weight-normal" style={{marginTop:'100px'}}>Daftar</h1>
      </div>
      <div className="form-label-group">
          <input 
          type="text" 
          id="inputNama" 
          className="form-control" 
          placeholder="Nama" 
          value = {nama} 
          onChange = {(e) => setNama(e.target.value)}
          />
          <label htmlFor="inputNama">Nama</label>
      </div>
      <div className="form-label-group">
          <input 
          type="date" 
          id="inputTTL" 
          className="form-control" 
          placeholder="Tempat Tanggal Lahir" 
          value = {tanggal_lahir} 
          onChange = {(e) => setTgl(e.target.value)}
          />
          <label htmlFor="inputTTL">Tempat Tanggal Lahir</label>
      </div>
      <div className="form-label-group">
          <select 
          id="inputJK" 
          className="form-control" 
          placeholder=""
          value = {jenis_kelamin} 
          onChange = {(e) => setJenis(e.target.value)}>
          <option  >Jenis Kelamin</option>
            <option value="pria">pria</option>
            <option value='wanita'>wanita</option>
          </select>
      </div>
      <div className="form-label-group">
          <input 
          type="text" 
          id="inputEmail" 
          className="form-control" 
          placeholder="Email address" 
          value = {username} 
          onChange = {(e) => setUsername(e.target.value)}/>
          <label htmlFor="inputEmail">Username</label>
      </div>
      <div className="form-label-group">
          <input 
          type="password" 
          id="inputPassword" 
          className="form-control" 
          placeholder="Password" 
          value = {password} 
          onChange = {(e) => setPassword(e.target.value)}/>
          <label htmlFor="inputPassword">Password</label>
      </div>
      <button className="mb-3  font-weight-normal w-100 btn btn-lg btn-outline-dark" type="submit">Daftar</button>
      <Link href="/"><button className="w-100 btn btn-lg btn-outline-dark" type="submit">Login</button></Link>
      </form>
      <Footer/>
    </div>
    )}