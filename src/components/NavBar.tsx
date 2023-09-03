import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import lotus from '../assets/white-lotus.svg'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

type LinkProps = {
    page: string,
    currentPage: string,
    setCurrentPage: (page: string) => void
}

const Link = ({ page, currentPage, setCurrentPage }: LinkProps) => {
    //page names will be capitalised for display. This will convert them to lowercase so they can accurately be compared for conditional rendering. 
    const lowerCasePage = page.toLowerCase()

    return(
        <AnchorLink 
            className={`${currentPage === lowerCasePage ? "text-yellow" : ""} text-2xl text-white cursor-pointer hover:bg-nav-hover hover:bg-clip-text hover:text-transparent transition duration-500 hover:no-underline`} 
            href={`#${lowerCasePage}`}
            onClick={() => setCurrentPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

function NavBar({ currentPage, setCurrentPage }: LinkProps) {
    //using state to toggle navbar menu
    const [ menuToggled, setMenuToggled ] = useState<boolean>(false)

    //checking to see if window is above a small screen with custom hook
    const aboveSmallScreens: boolean = useMediaQuery("(min-width: 768px)")

    return (
        <nav
            className='flex items-center justify-center'
        >
            <div
                className="fixed top-0 z-10 w-full flex items-center justify-between pt-10 mx-auto px-10 lg:w-4/5"
            >
                {/* brand logo and name */}
                <div
                    className='flex items-center justify-center'
                >
                    <img 
                        src={lotus} 
                        alt="brand logo" 
                        className='h-12 w-12'
                    />
                    <span className='hidden sm:inline-block ml-3 text-2xl text-white'>The White Lotus</span>
                </div>

                {/* menu options */}
                {aboveSmallScreens
                    ?
                    <div className="flex justify-between gap-20">
                        <Link
                            page="Overview"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        <Link
                            page="Accomodations"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        <Link
                            page="Amenities"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        <Link
                            page="Contact"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                    :
                    /* this is what NavBar will look like for smaller screens when menu is toggled off */
                    <button
                        className="rounded-full bg-red p-2 flex items-center justify-center hover:scale-125 transition duration-300"
                        onClick={() => setMenuToggled(true)}
                    >
                        <FontAwesomeIcon 
                            icon={faBars} 
                            style={{color: "white", height:'30px', width:'30px'}} 
                        />
                    </button>
                }

                {/* toggleable side menu for small/mobile screens */}
                {/* menu will slide in from top when user clicks the menu icon */}
                {/* after user clicks on a link, the menu will close automatically */}
                {(
                    <div 
                        className={`${ aboveSmallScreens ? 'hidden' : '' } fixed ${ menuToggled ? 'top-0' : '-top-[320px]'} h-[320px] right-0 w-full bg-slate-300 rounded-b-xl ease-in-out duration-700`}
                    >
                        {/* X button on top to close menu */}
                        <div className="flex justify-end px-4 pt-5">
                            <button 
                                onClick={() => setMenuToggled(!menuToggled)}
                                className="bg-blue-300 p-2 rounded-full flex items-center"
                            >
                                <FontAwesomeIcon 
                                    icon={faX} 
                                    style={{color: "#f5c211", height:'30px', width:'30px'}} 
                                />
                            </button>
                        </div>

                        {/* links inside menu */}
                        <div 
                            className="flex flex-col items-center gap-8 text-2xl"
                            /* closes menu after a link is clicked */
                            onClick={() => setMenuToggled(!menuToggled)}
                        >
                            <Link
                                page="Overview"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Link
                                page="Accomodations"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Link
                                page="Amenities"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Link
                                page="Contact"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar