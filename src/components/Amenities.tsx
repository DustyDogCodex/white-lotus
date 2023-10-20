import { motion } from "framer-motion"
import boats from '../assets/boats.jpg'
import pineappleDrink from '../assets/pineapple-drink.jpg'
import resort from "../assets/resort.jpg"
import resortPool from "../assets/resort-pool.jpg"
import beachBeds from "../assets/beach-beds.jpg"
import beachFun from "../assets/beach-fun.jpg"
import food from "../assets/food.jpg"

function Amenities() {
    return (
        <section
            id="amenities"
            className="mt-10 py-10 bg-neutral-200/60 flex flex-col items-center justify-center" 
        >
            {/* animated section heading */}
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
                    className="mt-10 text-5xl mb-6 text-center"
                >
                    What We Offer
                </h1>
            </motion.div>
            
            {/* MAIN CONTENT */}
            <div className="py-20 px-5 grid lg:grid-cols-2 gap-5 lg:w-4/5">
                {/* left side */}
                {/* staggered animation for img elements */}
                <motion.div 
                    className="grid grid-cols-2 grid-rows-6 gap-5 h-[100vh]"
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
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }} 
                        className="row-span-2 object-cover h-full w-full" 
                        src={boats} 
                        alt="Boats on the beach" 
                    />
                    <motion.img
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }} 
                        className="row-span-1 object-cover h-full w-full" 
                        src={pineappleDrink} 
                        alt="Pineappe Mojito" 
                    />
                    <motion.img 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="object-cover h-full w-full" 
                        src={resortPool} 
                        alt="Pool at the resort" 
                    />
                    <motion.img 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="col-span-2 row-span-2 object-cover h-full w-full" 
                        src={beachFun} 
                        alt="Fun time at the beach!" 
                    />
                    <motion.img 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="object-cover h-full w-full" 
                        src={beachBeds} 
                        alt="Beds at the beach" 
                    />
                    <motion.img 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="row-span-2 object-cover h-full w-full" 
                        src={food} 
                        alt="View of a plate of fresh food" 
                    />
                    <motion.img 
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="object-cover h-full w-full" 
                        src={resort} 
                        alt="Resort" 
                    />
                </motion.div>

                {/* right side */}
                <motion.div 
                    className="h-full flex flex-col items-center justify-center p-3 md:p-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <motion.h3 
                        className="text-3xl md:text-4xl text-center mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.75 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        Plan your next retreat with us
                    </motion.h3>
                    <motion.p 
                        className="text-center text-base md:text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.75, delay: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo ad repudiandae quam? Consequuntur dolore velit, reprehenderit voluptates dolores nostrum quia nisi quam maxime eveniet, nihil beatae, eos laudantium doloremque. Modi expedita nostrum omnis officiis impedit placeat quod obcaecati minima asperiores rerum corporis, quia at veniam aliquam sapiente rem nisi!
                    </motion.p>
                    
                    {/* buttons */}
                    <motion.div 
                        className="flex items-center gap-8 mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.75, delay: 1.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { delayChildren: 0.3, staggerChildren: 0.2 } 
                            }
                        }}    
                    >
                        <motion.button 
                            className="px-5 py-2 bg-gradient-to-r from-sky-300 to-blue-400 text-white rounded-lg text-xl hover:scale-110 transition duration-300"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                        >
                            Learn More
                        </motion.button>
                        <motion.button 
                            className="px-5 py-2 bg-gradient-to-r from-blue-400 to-sky-300 text-white rounded-lg text-xl hover:scale-110 transition duration-300"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                        >
                            Plan My Trip
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Amenities