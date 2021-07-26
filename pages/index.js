//@ts-check
import Footer from '../komponen/layout/user/footer'
import Headerr from '../komponen/layout/user/header1'
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
import React, {useImperativeHandle, useState,useEffect} from 'react' 
import LoginForm from '../komponen/login'


async function fetcher(url){
  const res = await fetch(url);
  return res.json();
}



export default function login() {
  const [users , setUser] = useState ({username:''});
  const [error , setError] = useState ('');
  let setLoginUser = false;
  const url ='http://localhost:3000/api/user';
  const {data} = useSWR(url,fetcher);
  console.log(data);

  const adminUSer = {
  username :"admin",
  password : "admin"
  } 
  
const Login = details => {
  console.log(details);
  if(details.username == adminUSer.username && details.password == adminUSer.password){
    console.log('LogIn');
    setUser({
      username:details.username,

    })
    Router.push('/admin/lihatcerita')
  }

  else{
    for(let i=0;i<data.length;i++){
      if(details.username == data[i].username && details.password == data[i].password){
        setLoginUser = true
      }
    }
    if(setLoginUser){
      Router.push('/user/home')
    }else{
      console.log('details tidak ada ! ')
      setError('Username & Password Salah!')
    }
    
  }
}

const Logout =() =>{
  console.log('Logout')
 
}
    return (
      <div>
        <Headerr/>
        <LoginForm Login = {Login} error = {error}/>
      <Footer/>
    </div>
    )}
