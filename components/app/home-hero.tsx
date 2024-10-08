import Link from "next/link"
import React from "react"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col justify-center gap-4 max-sm:gap-2 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#2892B0] max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
            Welcome to our Online Grocery Store!
          </h1>
          <p className="text-muted-foreground">
            Discover a wide range of fresh and high-quality products.
          </p>
          <div className="flex gap-2">
            <Link
              href={"/"}
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Explore
            </Link>
            <Link
              href={"/#features"}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="h-[500px] max-lg:h-[400px] max-md:h-[350px] md:w-1/2">
          <Image
            src={"/assets/img1.png"}
            width={1100}
            height={600}
            alt="hero image"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
