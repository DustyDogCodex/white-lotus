import { motion } from "framer-motion"

type SliderProps = {
    title: string,
    image: string
}

function SliderCard({ title, image }: SliderProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
            }}
        >
            <div
                className="h-96 w-80 flex flex-col items-center justify-around border border-black hover:shadow-lg hover:shadow-sky-500 hover:scale-110 transition duration-300"
            >
                <img 
                    src={image} 
                    alt="image showcasing accomodations"
                    className="h-[90%] w-full object-cover" 
                />
                <p className="text-sm text-center">{title}</p>
            </div>
        </motion.div>
    )
}

export default SliderCard