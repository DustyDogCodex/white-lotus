import './App.css'
import { useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {
    //using state to identify the current page the user is browser
    const [ currentPage, setCurrentPage ] = useState<string>('home')

    //using custom hook to determine if screen size is above or below 1060px
    const aboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)")

    return (
        <>
            <NavBar 
                page='N/A'
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Hero />
        </>
    )
}

export default App
