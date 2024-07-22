import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HomeDelicious = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className=" flex max-md:flex-col gap-8">
        <div className="flex flex-col md:w-1/2 max-sm:gap-2 gap-4  justify-center">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-[#B06A28]">
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
        <div className="md:w-1/2 h-[300px] max-md:h-[220px] max-lg:h-[280px] ">
          <Image
            src={"/assets/img3.jpg"}
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

export default HomeDelicious;
