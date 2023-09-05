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

    return (
        <div
            className="w-full h-full overflow-hidden flex justify-center items-center bg-black py-10"
        >
            <div
                className="flex flex-col"
            >
                <div
                    className="flex w-full"
                >
                    {mediaImages.map((image: string, index: number) => 
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
                    )}
                </div>

                {/* slide controller */}
                <div
                    className="w-full flex items-center justify-center"
                >
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        style={{color: "white",}} 
                        onClick={onLeft}
                    />
                    <p className="mx-5 text-white">1/5</p>
                    <FontAwesomeIcon 
                        icon={faChevronRight} 
                        style={{color: "white",}} 
                        onClick={onRight}
                    />
                </div>
            </div>
        </div>
    )
}

export default Media