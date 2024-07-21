const HomeStepItem = ({ title, icon: Icon, subTitle }: HomeStepItemProps) => {
  return (
    <div className="flex flex-col md:items-center gap-2 md:gap-5 mt-4">
      <div className="bg-red-200 px-2 py-2 rounded-full w-fit">
        <Icon className="size-6 sm:size-7 text-[#B03228] " />
      </div>
      <h2 className="font-semibold md:font-bold text-lg md:text-lg lg:text-xl text-[#332E25]">
        {title}
      </h2>
      <p className="text-gray-600 max-md:text-sm md:text-center sm:max-w-sm">
        {subTitle}
      </p>
    </div>
  );
};

export default HomeStepItem;
