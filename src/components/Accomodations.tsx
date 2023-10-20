import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import SliderCard from "./SliderCard"
import { accomodations, AccomodationsProps } from "../data"

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
                <h2 className="text-3xl text-center">ACCOMODATIONS</h2>
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
            </motion.div>
        </section>
    )
}

export default Accomodations