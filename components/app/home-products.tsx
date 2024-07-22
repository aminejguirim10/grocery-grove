import { HomeProductsItems } from "@/constants";
import HomeProductItem from "@/components/app/home-product-item";

const HomeProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:items-center ">
          <h1 className="text-[#B09928] text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl md:text-center">
            Our Products
          </h1>
          <p className="text-muted-foreground max-w-2xl md:text-center">
            Discover a wide variety of fresh produce, pantry staples, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-10 lg:gap-x-6 ">
          {HomeProductsItems.map((product, i) => (
            <HomeProductItem
              key={i}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              reviews={product.reviews}
              stars={product.stars}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
