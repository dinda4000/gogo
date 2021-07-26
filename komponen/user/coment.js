export default function Comen(props){
    return(
      <div className="d-flex">
        <div className="flex-shrink-0"><i className="fa fa-user" style={{fontSize: 18}} /></div>
        <div className="ms-3">
          <div className="fw-bold">{props.User}</div>
         <h6>{props.Komen}</h6>
        </div>
      </div>
    )
}
