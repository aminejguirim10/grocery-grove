import { HomeFeaturesItems } from "@/constants";
import HomeFeatureItem from "@/components/app/home-feature-item";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

const HomeFeatures = () => {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-4 md:items-center ">
          <h1 className="text-[#28B061] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:text-center">
            Quality Groceries Delivered to Your Doorstep
          </h1>
          <p className="text-muted-foreground max-w-2xl md:text-center">
            At our website, we pride ourselves on providing the freshest
            produce, ensuring fast and reliable delivery, and offering
            competitive pricing to our valued customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-7 md:mt-14">
          {HomeFeaturesItems.map((feature, i) => (
            <HomeFeatureItem
              icon={feature.icon}
              title={feature.title}
              subTitle={feature.subTitle}
              key={i}
            />
          ))}
        </div>
        <div className="flex gap-2 mt-7 md:mt-14">
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Order
          </Link>

          <Link
            href={"/#features"}
            className={buttonVariants({
              variant: "ghost",
              className: "flex items-center gap-1",
            })}
          >
            <span>Learn More</span>
            <Icons.chevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
