import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion"
import { mediaImages } from "../data"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }: { id: string }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section
            className="h-screen flex justify-center items-center relative snap-center"
        >
            <div ref={ref}>
                <img src={id} alt="resort images" />
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </section>
    )
}

function Media() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <>
            <h1 className="text-center text-3xl">Media</h1>
            {mediaImages.map((image) => (
                <Image id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
        </>
    )
}

export default Media