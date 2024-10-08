"use client"

import { stats } from "@/constants"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
const HomeTestimonialsStats = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
      className="mx-auto mt-10 flow-root max-w-2xl rounded-2xl bg-gray-100 sm:mt-20 lg:mx-0 lg:max-w-none"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial="hidden"
          animate={controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: stat.id * 0.2 }}
          style={{ textAlign: "center", padding: "10px" }}
        >
          <motion.h2
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
            style={{ margin: 0 }}
            className="text-lg font-bold text-[#B03228] md:text-2xl"
          >
            {stat.value}
          </motion.h2>
          <p
            style={{ margin: 0 }}
            className="text-sm text-[#B03228] text-muted-foreground md:text-lg"
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default HomeTestimonialsStats
