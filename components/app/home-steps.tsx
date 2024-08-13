import { HomeStepsItems } from "@/constants"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import HomeStepItem from "@/components/app/home-step-item"

const HomeSteps = () => {
  return (
    <section className="my-16 bg-gray-200 sm:my-20 lg:my-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 md:items-center">
            <h1 className="text-4xl font-bold text-[#28B061] max-md:text-3xl max-sm:text-2xl md:max-w-3xl md:text-center">
              Easy Steps to Place an Order on Our Website
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-center">
              Follow these simple steps to place an order on our website and get
              your groceries delivered right to your doorstep.
            </p>
          </div>
          <div className="self-start md:self-center">
            <div className="mt-7 grid grid-cols-1 md:mt-14 md:grid-cols-3">
              {HomeStepsItems.map((step, i) => (
                <HomeStepItem
                  icon={step.icon}
                  title={step.title}
                  subTitle={step.subTitle}
                  key={i}
                />
              ))}
            </div>
          </div>
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
      </div>
    </section>
  )
}

export default HomeSteps
