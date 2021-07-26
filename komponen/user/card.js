export default function Card(props){
  return(
    <div className="col-sm-3">
      <div className="card card-block text-center">
          <img src={props.Gambar} className="img-fluid" width={300} height={300}/>
          <h4>{props.Judul}</h4>
          <a href={`/user/tempatcerita/?id=${props.Id}`}>
          <h6 className="tc">{props.Cerita}</h6>
          <h5  style={{marginTop: 7}}><b><button type="button" class="btn btn-primary">BACA</button></b></h5>
        </a>
      </div>
    </div>
      
  

  )
}
