import './App.css'
import { useState } from 'react'
/* import useMediaQuery from './hooks/useMediaQuery' */
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Overview from './components/Overview'
import Accomodations from './components/Accomodations'
import Amenities from './components/Amenities'
import Media from './components/Media'

function App() {
    //using state to identify the current page the user is browser
    const [ currentPage, setCurrentPage ] = useState<string>('home')

    //using custom hook to determine if screen size is above or below 1060px
    /* const aboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)") */

    return (
        <>
            <NavBar 
                page='N/A'
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Hero />
            <Overview />
            <Accomodations />
            <Amenities />
            <Media />
        </>
    )
}

export default App
