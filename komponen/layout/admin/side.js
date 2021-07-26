//@ts-check
import Link from 'next/link'
export default function Side() {
    return(
      
        <div className='sidebar'  >
             <nav style={{height:'100%'}} className="navbar navbar-dark align-items-start sidebar  accordion  p-0">
    <div className="container-fluid d-flex flex-column p-0" >
<div className="sidebar-brand-text mx-3"><img src="/ab.gif" style={{marginLeft: '0PX', width: 75}} /></div>
      <span style={{marginRight: 0, borderColor: 'rgb(255,255,255)', color: 'rgb(255,255,255)', marginTop: 6, fontSize: 18, fontFamily: 'Alata, sans-serif'}}>SEJARAH WISATA</span>
      <ul className="navbar-nav text-light" id="accordionSidebar" style={{marginTop: 19}}>
        <li className="nav-item">
          <Link href="/admin/tambahcerita"><a className="nav-link active"><i className="fa fa-book" style={{fontSize: 18}} /><span style={{fontSize: 18}}>&nbsp;Tambah cerita</span></a></Link>        
        </li>
        <li className="nav-item">        
        <Link href ="/admin/lihatcerita"><a className="nav-link active" ><i className="fa fa-eye" style={{fontSize: 18}} /><span style={{fontSize: 18}}>&nbsp;Lihat cerita</span></a></Link>
        </li>
        <li className="nav-item">        
        <Link href ="/admin/lihatkomen"><a className="nav-link active" href="index.html"><i className="far fa-eye" style={{fontSize: 18}} /><span style={{fontSize: 18}}>&nbsp; Lihat Komentar</span></a></Link>
        </li>
        <li className="nav-item">        
        <Link href ="/admin/lihatuser"><a className="nav-link active" href="index.html"><i className="far fa-eye" style={{fontSize: 18}} /><span style={{fontSize: 18}}>&nbsp; user </span></a></Link>
        </li>
        <li className="nav-item">        
        <Link href ="/"><a className="nav-link active" href="index.html"><i className="far fa-user-circle" style={{fontSize: 18}} /><span style={{fontSize: 18}}>&nbsp; Log Out</span></a></Link>
        </li>
      </ul>
    </div>
  </nav>
        </div>
    )
    
}