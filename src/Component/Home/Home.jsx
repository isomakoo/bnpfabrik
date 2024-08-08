import { Route, Routes } from 'react-router-dom'
import './Home.css'
import Hero from '../Hero/Hero'
import Header from '../Header/Header'
import Foother from '../Foother/Foother'

function Home(){
    return(
        <> 
       <Hero></Hero> 
       <Header></Header>
        <Foother></Foother>    
        
              </>
    )
}
export default Home