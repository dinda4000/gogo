//@ts-check

import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default function updateCerita(){

  const [_id_cerita, setId] = useState('')
  const [_judul, setJudul] = useState('')
  const [_gambar, setGambar] = useState(null)
  const [_cerita, setCerita] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [file, setFile] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { id_cerita,judul,gambar,cerita } = router.query

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    const _file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = function () {
      setFile(_file);
      setGambar(reader.result);
    }
    reader.readAsDataURL(_file)
  }
  useEffect(() => {
    if (typeof id_cerita == 'string') {
      setId(id_cerita)
    }
    if (typeof judul == 'string') {
      setJudul(judul)
    }
    if (typeof gambar == 'string') {
      setGambar(gambar)
    }
    if (typeof cerita == 'string') {
      setCerita(cerita)
    }

  }, [id_cerita,judul,gambar,cerita])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('http://localhost:3000/api/updatecerita', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_cerita : _id_cerita,
          judul: _judul,
          gambar: _gambar,
          cerita: _cerita,
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)

      alert("Update data suskses" +_id_cerita +_judul +_gambar+ _cerita)
      Router.push('/admin/lihatcerita')
    } catch (e) {
      throw Error(e.message)
    }
  }
    return (
     <div id="wrapper">
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content" className="form-group mb-2 text-center">
       <h1 >Update Cerita</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-group row text-center" style={{marginBottom:'10px'}}>
          <label className="col-sm-2 col-form-label">ID_CERITA</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="id..." 
            value = {_id_cerita} 
            onChange = {(e) => setId(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row text-center" style={{marginBottom:'10px'}}>
          <label className="col-sm-2 col-form-label">JUDUL</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="Judul..." 
            value = {_judul} 
            onChange = {(e) => setJudul(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row text-center" style={{marginBottom:'10px'}} >
        <label htmlFor="upload" className="col-sm-2 col-form-label">gambar</label>
          <div className="col-sm-6">
         
          <input
            className='form-control'
            id="uploadGambar"
            type="file"
            onChange={onSelectImage}
          />
          </div>
        </div>
        <div className="form-group row text-center" >
          <label className="col-sm-2 col-form-label">Cerita</label>
          <div className="col-sm-6" style={{marginBottom:'10px'}}>
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="cerita..." rows={10} 
             value = {_cerita} 
             onChange = {(e) => setCerita(e.target.value)}
             />
          </div>
          <div className="col-sm-6 text-center">
          <button type="submit" className="btn btn-primary">UPDATE</button>
          </div>
        </div>

    </form>

    </div>
  </div>
  
    )
  }
  