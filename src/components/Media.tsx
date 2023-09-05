import { mediaImages } from "../data"
import { motion } from "framer-motion"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Media() {
    const [position, setPosition] = useState<number>(0)
    
    const onRight = () => {
        if(position < mediaImages.length - 1){
            setPosition(position + 1)
        }
    }

    const onLeft = () => {
        if(position > 0){
            setPosition(position - 1)
        }
    }

    /* {mediaImages.map((image: string, index: number) => 
                        <motion.div
                            key={index}
                            initial='hidden'
                            animate={{
                                rotate: 0,
                                left: `${(index - position) * 60 - 30}vw`,
                                scale: index === position ? 1 : 0.8,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <img 
                                src={image} 
                                alt="" 
                                className="w-[400px] h-[400px] rounded-lg"
                            />
                        </motion.div>
                    )} */

        {/* slide controller */}
                {/* <div
                    className="w-full flex items-center justify-center"
                >
                    
                </div>
 */}
    return (
        /* container div */
        <div
            className="w-full h-full flex justify-center items-center bg-black py-10 px-3"
        >
            {/* slideshow div */}
            <div
                className="relative"
            >
                <img 
                    src={mediaImages[0]} 
                    alt="images" 
                    className="rounded-lg"     
                />

                {/* button to go left */}
                <div
                    className="absolute top-[45%] left-3 cursor-pointer p-2 flex items-center rounded-full hover:bg-indigo-600"
                >
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        style={{color: "white", height:'30px', width:'30px'}} 
                        onClick={onLeft}
                    />
                </div> 

                {/* button to go right */} 
                <div
                    className="absolute top-[45%] right-3 cursor-pointer p-2 flex items-center rounded-full hover:bg-indigo-600"
                >
                    <FontAwesomeIcon 
                        icon={faChevronRight} 
                        style={{color: "white", height:'30px', width:'30px'}}
                        onClick={onRight}
                    />
                </div>  
            </div>
        </div>
    )
}

export default Media