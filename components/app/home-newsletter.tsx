import Image from "next/image";

import HomeNewsLetterForm from "@/components/form/home-newsLetter-form";

const HomeNewsLetter = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className=" flex max-md:flex-col gap-8">
        <div className="flex flex-col md:w-1/2 max-sm:gap-2 gap-4  justify-center">
          <h1 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-[#B02858]">
            Stay Updated with Exclusive Offers
          </h1>
          <p className="text-muted-foreground">
            Subscribe to our newsletter and be the first to know about special
            deals.
          </p>
          <HomeNewsLetterForm />
          <p className="text-muted-foreground text-xs">
            By clicking Get Started, you agree to our Terms and Conditions.
          </p>
        </div>
        <div className="md:w-1/2 h-[300px] max-md:h-[220px] max-lg:h-[280px] ">
          <Image
            src={"/assets/img4.jpg"}
            width={600}
            height={600}
            alt="hero image"
            className="h-full rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNewsLetter;
