import { motion } from "framer-motion"
import beachHuts from '../assets/beach-huts.jpg'
import boats from '../assets/boats.jpg'
import pineappleDrink from '../assets/pineapple-drink.jpg'
import resort from "../assets/resort.jpg"
import resortPool from "../assets/resort-pool.jpg"

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
                    className="mt-10 text-3xl mb-6 text-center font-thin"
                >
                    Why You Should Visit Us
                </h1>
            </motion.div>
            
            {/* MAIN CONTENT */}
            <div>
                {/* left side */}
                <div>   
                    <img src={beachHuts} alt="Resort huts on the beach" />
                    <img src={boats} alt="Boats on the beach" />
                    <img src={pineappleDrink} alt="Pineappe Mojito" />
                    <img src={resort} alt="Resort" />
                    <img src={resortPool} alt="Pool at the resort" />
                </div>

                {/* right side */}
                <div>

                </div>
            </div>
        </section>
    )
}

export default Amenities