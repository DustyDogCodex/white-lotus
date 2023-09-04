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
                className="h-96 w-80 flex flex-col items-center justify-center"
            >
                <img 
                    src={image} 
                    alt="image showcasing accomodations"
                    className="h-4/5 w-full" 
                />
                <p className="text-sm text-center">{title}</p>
            </div>
        </motion.div>
    )
}

export default SliderCard