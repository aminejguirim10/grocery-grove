import { testimonials } from "@/constants";

export default function HomeTestimonials() {
  return (
    <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold md:max-w-3xl text-[#2892B0]  leading-8 tracking-tight max-md:text-start  ">
          Testimonials
        </h2>
        <p className="mt-2 text-xl font-bold tracking-tight text-gray-800 sm:text-2xl max-md:text-start">
          What Our Customers Are Saying
        </p>
      </div>
      <div className="mx-auto mt-10 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          {testimonials.map((testimonial: any) => (
            <div
              key={testimonial.author.handle}
              className="pt-8 sm:inline-block sm:w-full sm:px-4"
            >
              <figure className="rounded-2xl bg-gray-100 p-8 text-sm leading-6">
                <blockquote className="text-gray-900">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
