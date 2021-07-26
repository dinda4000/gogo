//@ts-nocheck
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function Article(props){
  const url = 'http://localhost:3000/api/cerita';

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
  if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
    return(
      <>
      <div className="container">
                
          <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">{data[0].judul}</h2>
            <p className="lead articl">{data[0].cerita}</p>
            <p><a className="btn btn-secondary" href={`/user/tempatcerita/?id=${data[0].id}`}>
              View details »</a></p>
              <h6 hidden>{props.Id}</h6>
          </div>
          <div className="col-md-6">
          <img src={data[0].gambar} className="img-fluid" width={400} height={400}/>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-6 order-md-2">
            <h2 className="featurette-heading">{data[1].judul}</h2>
            <p className="lead articl">{data[1].cerita}</p>
            <p><a className="btn btn-secondary" href={`/user/tempatcerita/?id=${data[1].id}`}>
              View details »</a></p>
              <h6 hidden>{props.Id}</h6>

          </div>
          <div className="col-md-6 order-md-1">
          <img src={data[1].gambar} className="img-fluid" width={400} height={400}/>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-6">
            <h2 className="featurette-heading">{data[2].judul}</h2>
            <p className="lead articl">{data[2].cerita}</p>
            <p><a className="btn btn-secondary" href={`/user/tempatcerita/?id=${data[2].id}`}>
              View details »</a></p>
              <h6 hidden>{props.Id}</h6>

          </div>
          <div className="col-md-6">
          <img src={data[2].gambar} className="img-fluid" width={400} height={400}/>
          </div>
        </div>
        <hr className="featurette-divider" />
        
        </div>
     </>
    )
}