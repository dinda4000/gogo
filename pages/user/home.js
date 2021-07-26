//@ts-check
import Jumbotron from '../../komponen/user/jumbotron'
import Card from '../../komponen/user/card'
import Article from '../../komponen/user/article'
import useSWR from 'swr'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function Home() {
  const url ='http://localhost:3000/api/cerita';

  const {data,error} = useSWR(url,fetcher);

  if(error){
      return <div>error......</div>
  }
  if(!data){
      return <div>loading......</div>
  }
  return (
    <div className="row"> 
    <Jumbotron/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-dark text-center" >
              <h1></h1>
              <h1><b><i>SEJARAH WISATA INDONESIA</i></b></h1>
            </div>
          </div> 
          <Article/> 
          <section className="projects-clean">
            <div className="container">
              <div className="row projects">
                { data.map((Cerita) => (
                <Card  Id={Cerita.id} Gambar={Cerita.gambar} Judul={Cerita.judul} Cerita={Cerita.cerita}/>
                ))}
              </div>
            </div>
          </section>
      </div>
    </div>
    )
  }