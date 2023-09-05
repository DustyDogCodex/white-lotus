import { motion } from "framer-motion"

function Overview() {
    return (
        <section
            id="overview"
            className="flex items-center justify-center p-10 my-10"
        >
            <motion.div
                className="p-5 bg-slate-100 font-thin lg:w-2/5 xl:w-1/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75 }}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0}
                }}
            >
                <h1 className="mt-10 text-2xl text-center">ALL-SUITE PRIVATE ISLAND PARADISE IN THE HEART OF FRENCH POLYNESIA</h1>
                <p
                    className="mt-10 text-center"
                >
                    Nestled in the heart of the South Pacific's jewel, Bora Bora, our 5-star luxury resort invites you to embark on a journey of unparalleled beauty and opulence. With the crystal-clear waters of the Pacific Ocean as your backdrop, immerse yourself in the epitome of island elegance and tranquility. Our exclusive enclave seamlessly blends natural wonders with refined indulgence, offering discerning travelers a haven of serenity, sophistication, and extraordinary beauty. Welcome to a world where every moment is an exquisite escape, and every experience is an embodiment of luxury. Your dream getaway begins here, at the pinnacle of Bora Bora's allure.
                </p>
            </motion.div>
        </section>
    )
}

export default Overview