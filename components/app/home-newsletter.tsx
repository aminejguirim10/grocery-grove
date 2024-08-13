import Image from "next/image"

import HomeNewsLetterForm from "@/components/form/home-newsLetter-form"

const HomeNewsLetter = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex gap-8 max-md:flex-col">
        <div className="flex flex-col justify-center gap-4 max-sm:gap-3 md:w-1/2">
          <h1 className="text-4xl font-bold text-[#B02858] max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
            Stay Updated with Exclusive Offers
          </h1>
          <p className="text-muted-foreground">
            Subscribe to our newsletter and be the first to know about special
            deals.
          </p>
          <HomeNewsLetterForm />
          <p className="text-xs text-muted-foreground">
            By clicking Get Started, you agree to our Terms and Conditions.
          </p>
        </div>
        <div className="h-[300px] max-lg:h-[280px] max-md:h-[220px] md:w-1/2">
          <Image
            src={"/assets/img4.jpg"}
            width={600}
            height={600}
            alt="hero image"
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeNewsLetter
