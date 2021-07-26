//@ts-check
import { useState } from 'react'

export default function Komentar() {
  const [id_komentar, setId] = useState('')
  const [komentar, setKomentar] = useState('')
    
  const clearInput = () => {
    setId('')
    setKomentar('')
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/komen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_komentar,
          komentar
        }),
      })
      // setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      // Router.push('/')
      alert("Berhasil berkomentar")
      clearInput()
    } catch (e) {
      throw Error(e.message)
    }
  }
    return (
     <div id="wrapper">
    <div className="d-flex flex-column" id="content-wrapper">
    <div id="content" className="form-group mb-2 text-center">
       <h1 >Tambah Komentar</h1>
      </div>
      {/* <form onSubmit={submitHandler}>
        <div className="form-group row text-center" >
        <label className="col-sm-2 col-form-label">Id_komentar</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="id..." 
            value = {id_komentar} 
            onChange = {(e) => setId(e.target.value)}
            />
          </div>
          <label className="col-sm-2 col-form-label">Komentar</label>
          <div className="col-sm-6" style={{marginBottom:'10px'}}>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Tulis Komentar ..." rows={5} 
             value = {komentar} 
             onChange = {(e) => setKomentar(e.target.value)}
             />
          
          <div className="col-sm-6">
          <button type="submit" className="btn btn-dark">Post</button>
          </div>
        </div></div>

    </form> */}
    <form onSubmit={submitHandler}>
        <div className="form-group row text-center" style={{marginBottom:'10px'}}>
          <label className="col-sm-2 col-form-label">Id_Komentar</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="Masukkan Id ..." 
            value = {id_komentar} 
            onChange = {(e) => setId(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row text-center" >
          <label className="col-sm-2 col-form-label">Komentar</label>
          <div className="col-sm-6" style={{marginBottom:'10px'}}>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Tulis Komentar ..." rows={10} 
             value = {komentar} 
             onChange = {(e) => setKomentar(e.target.value)}
             />
          </div>
          <div className="col-sm-6 text-center">
          <button type="submit" className="mb-3 font-weight-normal w-25 btn btn-lg btn-outline-dark">Post</button>
          </div>
        </div>

    </form>
    </div>
  </div>
  
    )
  }