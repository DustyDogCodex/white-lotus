import Luxury1 from "../assets/Luxury1.jpg"
import Luxury2 from "../assets/Luxury2.jpg"
import Luxury3 from "../assets/Luxury3.jpg"
import { motion } from "framer-motion"

function Luxury() {
    return (
        <div className="w-full flex justify-center h-screen px-4 pt-16 md:mb-[30%]">
            <div className="h-[600px] grid lg:grid-cols-3 gap-5 w-full lg:w-4/5 bg-sky-200 p-8">
                {/* intro */}
                <motion.div 
                    className="relative lg:top-20 col-span-2 lg:col-span-1 py-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h3 className="text-4xl font-bold">Luxury Beyond Measure</h3>
                    <p className="pt-5 text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores architecto facere distinctio vero, laboriosam tempore animi odit molestias, harum placeat perferendis libero cumque? Harum voluptatum perferendis ea ex aliquid corporis?
                    </p>
                </motion.div>

                {/* images */}
                <motion.div 
                    className="grid grid-cols-2 col-span-2 gap-3"
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
                >
                    <motion.img 
                        className="object-cover w-full h-full" 
                        src={Luxury1} 
                        alt="Luxurious amenities" 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                    />
                    <motion.img 
                        className="row-span-2 object-cover w-full h-full" 
                        src={Luxury2} 
                        alt="Luxurious amenities"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }} 
                    />
                    <motion.img 
                        className="object-cover w-full h-full" 
                        src={Luxury3} 
                        alt="Luxurious amenities"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }} 
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Luxury