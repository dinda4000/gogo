//@ts-check
import { useState } from 'react'

export default function Cerita() {
  const [id_cerita, setId] = useState('')
  const [judul, setJudul] = useState('')
  const [gambar, setGambar] = useState(null)
  const [selectedFile, setSelectedFile] = useState('')
  const [file, setFile] = useState('')
  const [cerita, setCerita] = useState('')

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
  const clearInput = () => {
    setId('')
    setJudul('')
    setGambar('')
    setCerita('')
    setSelectedFile('')
    setFile('')
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/input-cerita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_cerita,
          judul,
          gambar,
          cerita
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
     <div id="wrapper">
    <div className="d-flex flex-column" id="content-wrapper">
      <div id="content" className="form-group mb-2 text-center">
       <h1 >Tambah Cerita</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="form-group row text-center" style={{marginBottom:'10px'}}>
          <label className="col-sm-2 col-form-label">ID_CERITA</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="id..." 
            value = {id_cerita} 
            onChange = {(e) => setId(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row text-center" style={{marginBottom:'10px'}}>
          <label className="col-sm-2 col-form-label">JUDUL</label>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="Judul..." 
            value = {judul} 
            onChange = {(e) => setJudul(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row text-center" style={{marginBottom:'10px'}} >
          <label className="col-sm-2 col-form-label">gambar</label>
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
             value = {cerita} 
             onChange = {(e) => setCerita(e.target.value)}
             />
          </div>
          <div className="col-sm-6 text-center">
          <button type="submit" className="btn btn-primary">Upload</button>
          </div>
        </div>

    </form>

    </div>
  </div>
  
    )
  }
  