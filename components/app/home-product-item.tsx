import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
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
      className="size-5 text-yellow-400 fill-yellow-400"
    />
  ));

  return (
    <Card className="shadow-xl">
      <CardHeader className="bg-white rounded-md">
        <div className="flex justify-center items-center h-[100px] md:h-[120px] lg:h-[150px]">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="h-full w-1/2 "
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 pt-4 items-center">
        <h1 className="text-center font-bold text-lg md:text-xl ">{title}</h1>
        <p className="text-center text-muted-foreground font-semibold text-base md:text-lg">
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
      <CardFooter className="justify-center -mt-2">
        <Button
          variant={index % 2 ? "product" : "outline"}
          className={index % 2 == 0 ? "border-orange-400" : ""}
        >
          Shop Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HomeProductItem;
