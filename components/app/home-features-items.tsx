"use client"
import { HomeFeaturesItems } from "@/constants"
import { useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import HomeFeatureItem from "@/components/app/home-feature-item"

const HomeFeaturesItemsSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <div
      ref={ref}
      className="mt-7 grid grid-cols-1 md:mt-14 md:grid-cols-3 md:gap-4"
    >
      {HomeFeaturesItems.map((feature, i) => (
        <HomeFeatureItem
          icon={feature.icon}
          title={feature.title}
          subTitle={feature.subTitle}
          key={i}
          index={i}
          controls={controls}
        />
      ))}
    </div>
  )
}

export default HomeFeaturesItemsSection
