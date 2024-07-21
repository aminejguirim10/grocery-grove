import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "@/components/shared/icons";

const HomeFresh = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className=" flex max-md:flex-col-reverse gap-8">
        <div className="md:w-1/2 h-[350px] max-md:h-[270px] max-lg:h-[350px] ">
          <Image
            src={"/assets/img2.jpg"}
            width={600}
            height={600}
            alt="hero image"
            className="h-full rounded-xl w-full"
          />
        </div>
        <div className="flex flex-col md:w-1/2 max-sm:gap-2 gap-4  justify-center">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-[#2892B0]">
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
  );
};

export default HomeFresh;
