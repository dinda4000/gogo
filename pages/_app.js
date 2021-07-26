//@ts-check
import '../styles/globals.css'
import '../styles/glow.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.module.css'
import"../styles/untitled.css"
import "../styles/bootstrap.min.css"
import "../styles/fonts/fontawesome-all.min.css"
import "../styles/fonts/font-awesome.min.css"
import "../styles/fonts/fontawesome5-overrides.min.css"
import {useRouter} from 'next/router'
import LayoutUser from '../komponen/layout/user/layout'
import LayoutAdmin from'../komponen/layout/admin/layout'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if(router.pathname.startsWith('/admin/')){
    return(
      <LayoutAdmin>
          <Component {...pageProps} />
      </LayoutAdmin>
    )
  }
  else if(router.pathname.startsWith('/user/')){
    return(
      <LayoutUser>
          <Component {...pageProps} />
    </LayoutUser>
    )
  }
  else{
    return <Component {...pageProps} />
    
  }
}
export default MyApp
