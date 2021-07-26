import Header from './header'
import Footer from './footer'
const Layoutuser = ({children}) =>{
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layoutuser