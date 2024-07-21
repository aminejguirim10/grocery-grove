import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className=" flex max-md:flex-col gap-8">
        <div className="flex flex-col md:w-1/2 max-sm:gap-2 gap-4  justify-center">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-[#2892B0]">
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
        <div className="md:w-1/2 h-[500px] max-md:h-[350px] max-lg:h-[400px] ">
          <Image
            src={"/assets/img1.png"}
            width={600}
            height={600}
            alt="hero image"
            className="h-full rounded-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
