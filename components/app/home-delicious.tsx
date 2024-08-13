import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const HomeDelicious = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col justify-center gap-4 max-sm:gap-2 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#B06A28] max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
            Discover Fresh and Delicious Groceries
          </h1>
          <p className="text-muted-foreground">
            Shop for a wide variety of fresh produce, pantry staples, and more.
          </p>
          <div className="flex gap-2">
            <Link
              href={"/#features"}
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Sign up
            </Link>
            <Link
              href={"/"}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
            >
              Start Shopping
            </Link>
          </div>
        </div>
        <div className="h-[300px] max-lg:h-[280px] max-md:h-[220px] md:w-1/2">
          <Image
            src={"/assets/img3.jpg"}
            width={600}
            height={600}
            alt="hero image"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeDelicious
