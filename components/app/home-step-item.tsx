const HomeStepItem = ({ title, icon: Icon, subTitle }: HomeStepItemProps) => {
  return (
    <div className="mt-4 flex flex-col gap-2 md:items-center md:gap-5">
      <div className="w-fit rounded-full bg-red-200 px-2 py-2">
        <Icon className="size-6 text-[#B03228] sm:size-7" />
      </div>
      <h2 className="text-lg font-semibold text-[#332E25] md:text-lg md:font-bold lg:text-xl">
        {title}
      </h2>
      <p className="text-gray-600 max-md:text-sm sm:max-w-sm md:text-center">
        {subTitle}
      </p>
    </div>
  )
}

export default HomeStepItem
