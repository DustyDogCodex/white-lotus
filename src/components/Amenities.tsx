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
                    Why You Should Visit
                </h1>
            </motion.div>
            
            {/* MAIN CONTENT */}
            <div className="py-20 px-5 grid lg:grid-cols-2 gap-5 lg:w-4/5">
                {/* left side */}
                <div className="grid grid-cols-2 grid-rows-6 gap-5 h-[100vh]">   
                    <img className="row-span-2 object-cover h-full w-full" src={boats} alt="Boats on the beach" />
                    <img className="row-span-1 object-cover h-full w-full" src={pineappleDrink} alt="Pineappe Mojito" />
                    <img className="object-cover h-full w-full" src={resortPool} alt="Pool at the resort" />
                    <img className="col-span-2 row-span-2 object-cover h-full w-full" src={beachFun} alt="Fun time at the beach!" />
                    <img className="object-cover h-full w-full" src={beachBeds} alt="Beds at the beach" />
                    <img className="row-span-2 object-cover h-full w-full" src={food} alt="View of a plate of fresh food" />
                    <img className="object-cover h-full w-full" src={resort} alt="Resort" />
                </div>

                {/* right side */}
                <div className="h-full flex flex-col items-center justify-center p-3 md:p-10">
                    <h3 className="text-3xl md:text-4xl text-center mb-8">Plan your next retreat with us</h3>
                    <p className="text-center text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo ad repudiandae quam? Consequuntur dolore velit, reprehenderit voluptates dolores nostrum quia nisi quam maxime eveniet, nihil beatae, eos laudantium doloremque. Modi expedita nostrum omnis officiis impedit placeat quod obcaecati minima asperiores rerum corporis, quia at veniam aliquam sapiente rem nisi!</p>
                    
                    {/* buttons */}
                    <div className="flex items-center gap-8 mt-5">
                        <button className="px-5 py-2 bg-gradient-to-r from-sky-300 to-blue-400 text-white rounded-lg text-xl hover:scale-110 transition duration-300">Learn More</button>
                        <button className="px-5 py-2 bg-gradient-to-r from-blue-400 to-sky-300 text-white rounded-lg text-xl hover:scale-110 transition duration-300">Plan My Trip</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Amenities