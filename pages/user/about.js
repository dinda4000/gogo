export default function About() {
    return (
      <div>
        <main>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">About Us</h1>
            <p className="fs-5 text-muted">Kami membuat projek gogo-cerita sejarah Indonesia ini adalah untuk memenuhi tugas pemrograman web pada semester 4 dan kami beranggotakan 2 orang.</p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Dinda Putri Ramadhani</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">1119101798<small className="text-muted fw-light">/NIM</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>dindaputrir25@gmail.com</li>
                    <li>@xdindaputrii</li>
                    <li>0895368102657</li>
                  </ul>
                  {/* <button type="button" className="w-100 btn btn-lg btn-outline-dark">Sign up for free</button> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Avita Nurdiana</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">1119101713<small className="text-muted fw-light">/NIM</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>avitanurdiana@gmail.com</li>
                    <li>@vtnrdn</li>
                    <li>082327981721</li>
                  </ul>
                  {/* <button type="button" className="w-100 btn btn-lg btn-outline-dark">Get started</button> */}
                </div>
              </div>
            </div>  
          </div>
        </main>
      </div>
    )
  }
  