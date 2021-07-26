//@ts-check
import { useRouter } from 'next/router'
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function cerita() {
  const router = useRouter()
  const { id } = router.query
  const url = `http://localhost:3000/api/detail/detail?id=${id}`;

  const { data, error } = useSWR(url, fetcher);

  if (error) {
    return <div>error......</div>
  }
  if (!data) {
    return <div>loading......</div>
  }
 return(
<div className="container">
      <div className=" container text-center">
          <h6 hidden>{data.id_cerita}</h6>
          <h2>{data[0].judul}</h2> 
          <img src={data[0].gambar} className="center-block img-fluid my-3 " width={500} height={300}/>
            <h3 style={{ paddingTop: '20px'}}>
            {data[0].judul}
            </h3>
            <div className="col-md-10">
            <h5 className="cerita"style={{textAlign:'justify'}}>
             {data[0].cerita}
             </h5>
             <h5 className="cerita">
             &ensp; &emsp; {data[0].paragraf2}
             </h5>
             <h5 className="cerita">
             &ensp; &emsp; {data[0].paragraf3}
             </h5>
             </div>
             {/* <section className="mb-5">
    <div className="card bg-light ">
      <div className="card-body ">
        <form className="mb-4">
          <textarea className="form-control" rows={3} placeholder="Join the discussion and leave a comment!" defaultValue={""} />
          <button style={{marginTop:'10px'}} className="btn btn-sm btn-success">Post</button>
        </form>
      </div>
    </div>
  </section> */}
      </div>
  </div>
    )
  }
  