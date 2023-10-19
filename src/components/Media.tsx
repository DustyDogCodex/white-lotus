import { mediaImages } from "../data"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Media() {
    const [ position, setPosition ] = useState<number>(0)
    const [ direction, setDirection ] = useState<string>('')
    
    const nextImage = () => {
        setDirection('right')
        if(position === mediaImages.length - 1){
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }

    const prevImage = () => {
        setDirection('left')
        if(position === 0){
            setPosition(mediaImages.length - 1)
        } else {
            setPosition(position - 1)
        }
    }

    //variants object for motion.img
    const variants = {
        initial:{  
            opacity: 0, 
            x: direction === 'right' ? 100 : -100 
        },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: {
                x: { 
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                },
                opacity: {
                    duration: 0.2
                }
            }
        },
        exit:{ 
            opacity: 0, 
            x: direction === 'left' ? -100 : 100 
        }
    }

    return (
        <section
            id="gallery"
            className="w-full h-full flex flex-col justify-center items-center bg-black py-10 px-3"
        >
            <h2 className="text-3xl text-white mb-5">Photo Gallery</h2>
            <div
                className="relative h-[300px] md:h-[600px] w-[350px] md:w-full overflow-hidden lg:w-3/5" 
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img 
                        key={mediaImages[position]}
                        src={mediaImages[position]} 
                        alt="images" 
                        className="rounded-lg h-full w-full" 
                        variants={variants}  
                        initial="initial"
                        animate='animate'
                        exit='exit'
                        custom={direction}
                    />
                </AnimatePresence>

                {/* button to go left */}
                <div
                    className="absolute top-[45%] left-3 cursor-pointer p-2 flex items-center rounded-full bg-black/70 transition duration-300 hover:bg-indigo-600"
                >
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        style={{color: "white", height:'30px', width:'30px'}} 
                        onClick={prevImage}
                    />
                </div> 

                {/* button to go right */} 
                <div
                    className="absolute top-[45%] right-3 cursor-pointer p-2 flex items-center rounded-full bg-black/70 transition duration-300 hover:bg-indigo-600"
                >
                    <FontAwesomeIcon 
                        icon={faChevronRight} 
                        style={{color: "white", height:'30px', width:'30px'}}
                        onClick={nextImage}
                    />
                </div>  
            </div>
        </section>
    )
}

export default Media