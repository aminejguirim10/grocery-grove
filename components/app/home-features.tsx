import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import HomeFeaturesItemsSection from "@/components/app/home-features-items"

const HomeFeatures = () => {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 md:items-center">
          <h1 className="text-4xl font-bold text-[#28B061] max-md:text-3xl max-sm:text-2xl md:max-w-3xl md:text-center">
            Quality Groceries Delivered to Your Doorstep
          </h1>
          <p className="max-w-2xl text-muted-foreground md:text-center">
            At our website, we pride ourselves on providing the freshest
            produce, ensuring fast and reliable delivery, and offering
            competitive pricing to our valued customers.
          </p>
        </div>
        <HomeFeaturesItemsSection />
        <div className="mt-7 flex gap-2 md:mt-14">
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
  )
}

export default HomeFeatures
