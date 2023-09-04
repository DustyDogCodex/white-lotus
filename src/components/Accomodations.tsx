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
            className=""
        >
            <h2 className="text-2xl font-thin text-center">ACCOMODATIONS</h2>

            <motion.div
                    ref={slider}
                    whileTap={{ cursor: 'grabbing' }}
                    className="cursor-grab overflow-hidden w-full"
                >
                    <motion.div
                        drag='x'
                        dragConstraints={{ right:0, left: -width }}
                        className="flex gap-10"
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