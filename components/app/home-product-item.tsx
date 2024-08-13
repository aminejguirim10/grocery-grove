import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
const HomeProductItem = ({
  title,
  price,
  imageUrl,
  reviews,
  stars,
  index,
}: HomeProductItemProps) => {
  const starElements = Array.from({ length: stars }, (_, index) => (
    <Icons.star
      key={index}
      className="size-5 fill-yellow-400 text-yellow-400"
    />
  ))

  return (
    <Card className="shadow-xl">
      <CardHeader className="rounded-md bg-white">
        <div className="flex h-[100px] items-center justify-center md:h-[120px] lg:h-[150px]">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="h-full w-1/2"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-1 pt-4">
        <h1 className="text-center text-lg font-bold md:text-xl">{title}</h1>
        <p className="text-center text-base font-semibold text-muted-foreground md:text-lg">
          {price}
        </p>
        <div className="flex gap-2">
          <div className="flex gap-1">{starElements}</div>
          <span className="text-gray-500">
            {"("}
            {reviews}
            {"k Reviews)"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="-mt-2 justify-center">
        <Button
          variant={index % 2 ? "product" : "outline"}
          className={index % 2 == 0 ? "border-orange-400" : ""}
        >
          Shop Now
        </Button>
      </CardFooter>
    </Card>
  )
}

export default HomeProductItem
