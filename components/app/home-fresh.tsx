import Link from "next/link"
import React from "react"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { Icons } from "@/components/shared/icons"

const HomeFresh = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 max-md:flex-col-reverse">
        <div className="h-[350px] max-lg:h-[350px] max-md:h-[270px] md:w-1/2">
          <Image
            src={"/assets/img2.jpg"}
            width={600}
            height={600}
            alt="hero image"
            className="h-full w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 max-sm:gap-2 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#2892B0] max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
            Get Fresh Groceries Delivered to Your Doorstep
          </h1>
          <p className="text-muted-foreground">
            Say goodbye to long grocery store lines and heavy bags. With our
            grocery delivery service, you can easily order fresh produce, pantry
            staples, and more from the comfort of your own home. Let us take
            care of the shopping, so you can spend more time doing what you
            love.
          </p>
          <div className="flex gap-2">
            <Link
              href={"/#features"}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Learn More
            </Link>
            <Link
              href={"/"}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "flex items-center gap-1",
              })}
            >
              <span>Sign up</span>
              <Icons.chevronRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFresh
