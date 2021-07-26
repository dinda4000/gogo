//@ts-check
import Link from 'next/link'
import React ,{useState} from'react';
export default function loginform({Login , error }){
    const [details ,setDetails] = useState({username :'', password: ''});

    const submitHandler = e =>{
        e.preventDefault();
        const user = Login(details);
    }
    return(
        <div>
             {(error!='')?( <p style={{fontSize: "16px",color: "#2E8B57",textAlign: "center",fontWeight: "bold",marginTop: "18px"}}  >{error}</p>):''}
             <form className="form-signin " onSubmit={submitHandler}>
      <div className="text-center mb-4">
          <h1 className="h3 mb-3  font-weight-normal" style={{marginTop:'100px'}}>Login</h1>
      </div>
      <div className="form-label-group">
          <input type="text" id="inputEmail" className="form-control" placeholder="Email address" 
           onChange={e =>setDetails({...details, username: e.target.value})} value={details.username}
          />
          <label htmlFor="inputEmail">Username</label>
      </div>
      <div className="form-label-group">
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
            onChange={e =>setDetails({...details, password: e.target.value})} value={details.password} 
          />
          <label htmlFor="inputPassword">Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-outline-dark" type="submit">Masuk</button>
      <div className="flex-col-c p-t-170 p-b-40">
        <span className="txt1 p-b-9">Don’t have an account?</span>
        <a href="/signup" className="txt3">
        Sign up now</a>
        </div>
      </form>
        </div>
    )
}