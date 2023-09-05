import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import SliderCard from "./SliderCard"
import { accomodations, AccomodationsProps } from "../data"
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons" */

function Accomodations() {
    const [ width, setWidth ] = useState<number>(0)
    const slider = useRef<HTMLDivElement>(null)

    //determining width of slider to set dragConstraint for slider div
    useEffect(() => {
        if(slider.current){
            setWidth(slider.current?.scrollWidth -  slider.current?.offsetWidth)
        }
    }, [])

    return (
        <section
            id="accomodations"
            className="p-5"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, delay: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <h2 className="text-3xl font-thin text-center">ACCOMODATIONS</h2>
            </motion.div>
            
            {/* slider for displaying accomodations */}
            <motion.div
                ref={slider}
                whileTap={{ cursor: 'grabbing' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: { opacity: 1, scale: 0 }, 
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { delayChildren: 0.3, staggerChildren: 0.2 }
                    }
                }}
                className="mt-5 py-10 overflow-hidden w-full flex flex-col items-start lg:items-center justify-center"
            >
                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-8 cursor-grab"
                >
                    {accomodations.map((room: AccomodationsProps, index: number) => 
                        <SliderCard 
                            key={index}
                            title={room.title} 
                            image={room.image}  
                        />
                    )}
                </motion.div>
                
                {/* slide controller */}
                {/* <div
                    className="w-full flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "#010813",}} />
                    <p className="mx-5 text-sm">1/5</p>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#010813",}} />
                </div> */}
            </motion.div>
        </section>
    )
}

export default Accomodations