import { HomeProductsItems } from "@/constants"
import HomeProductItem from "@/components/app/home-product-item"

const HomeProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:items-center">
          <h1 className="text-4xl font-bold text-[#B09928] max-md:text-3xl max-sm:text-2xl md:max-w-3xl md:text-center">
            Our Products
          </h1>
          <p className="max-w-2xl text-muted-foreground md:text-center">
            Discover a wide variety of fresh produce, pantry staples, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
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
  )
}

export default HomeProducts
