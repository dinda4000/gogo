//@ts-check
import useSWR from 'swr'
import { mutate } from 'swr'
import { useState } from 'react'
// import Moment from 'react-moment'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function tableCerita() {
    const [deleting, setDeleting] = useState(false)
    const url = 'http://localhost:3000/api/cerita';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
  async function deleteEntry(value) {
    setDeleting(true)
    let res = await fetch(`http://localhost:3000/api/delet-cerita?id_cerita=${value}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    alert("Data telah dihapus  "  )
    mutate('http://localhost:3000/api/cerita')
    setDeleting(false)
  }
    return(
        <div className="container ">
    <div className="d-flex flex-column" >
    <div id="content">
     <h1 className="text-center">Lihat Cerita</h1>
    </div>
    <div className="table-responsive text-nowrap">
      <table className="table table-hover table-bordered border-dark">
      <thead className="table-dark">
          <tr>
            <th>NO</th>
            <th>ID_cerita</th>
            <th>JUDUL</th>
            <th>GAMBAR</th>
            <th>CERITA</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
        {data.map((Cerita,index)=>
          <tr>
            <th scope="row">{index+1}</th>
            <td>{Cerita.id_cerita}</td>
            <td>{Cerita.judul}</td>
            <td>
              <img
                  className="rounded"
                  src={Cerita.gambar}
                  alt="Sampul"
                  style={{ width: '70px', height: '70px' }}
                />
            </td> 
            <td>
              <textarea className="form-control" rows={3} >{Cerita.cerita}</textarea>
            </td>
            <td>
            <a 
              href={`/admin/updatecerita/?id_cerita=${Cerita.id_cerita}&judul=${Cerita.judul}&cerita=${Cerita.cerita}`}>
              <button type="button" className="btn btn-primary btn-sm px-3">
              <i className="fas fa-pencil-alt" />
              </button></a>
              <button type="button" className="btn btn-danger btn-sm px-3"
              disabled={deleting} 
              value = {Cerita.id_cerita}
              onClick={e => deleteEntry(e.target.value)}     
              >{deleting ? '' : ' ' }
              <i className="fas fa-times" />
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
}