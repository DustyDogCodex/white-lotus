import { motion, useTransform, useScroll } from "framer-motion"
import { amenities } from "../data"

function Amenities() {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 0.6], [0.4, 1])

    return (
        <section
            id="amenities"
            className="mt-10 py-10 bg-neutral-200/60 flex flex-col items-center justify-center" 
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0}
                }}
            >
                <h1
                    className="mt-10 text-3xl mb-6 text-center font-thin"
                >
                    AMENITIES
                </h1>
            </motion.div>

            <motion.div
                style={{ scale }}
                className="flex items-center justify-between lg:w-3/5"
            >
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                    className="flex flex-col md:flex-row items-center"
                >
                    <img 
                        src={amenities[0].image} 
                        alt="" 
                        className="rounded-lg h-80 md:h-full w-full md:w-1/2"
                    />
                    <div
                        className="p-10"
                    >
                        <h3
                            className="text-2xl font-bold mb-6 text-center"
                        >
                            {amenities[0].title}
                        </h3>
                        <p className="text-center text-lg mt-3">{amenities[0].summary}</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ scale }}
                className="flex items-center justify-between lg:w-3/5"
            >
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                    className="flex flex-col md:flex-row-reverse items-center"
                >
                    <img 
                        src={amenities[1].image} 
                        alt="" 
                        className="rounded-lg h-80 md:h-full w-full md:w-1/2"
                    />
                    <div
                        className="p-10"
                    >
                        <h3
                            className="text-2xl font-bold mb-6 text-center"
                        >
                            {amenities[1].title}
                        </h3>
                        <p className="text-center text-lg mt-3">{amenities[1].summary}</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ scale }}
                className="flex items-center justify-between lg:w-3/5"
            >
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                    className="flex flex-col md:flex-row items-center"
                >
                    <img 
                        src={amenities[2].image} 
                        alt="" 
                        className="rounded-lg h-80 md:h-full w-full md:w-1/2"
                    />
                    <div
                        className="p-10"
                    >
                        <h3
                            className="text-2xl font-bold mb-6 text-center"
                        >
                            {amenities[2].title}
                        </h3>
                        <p className="text-center text-lg mt-3">{amenities[2].summary}</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Amenities