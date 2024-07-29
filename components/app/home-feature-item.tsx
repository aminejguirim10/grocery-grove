import { motion } from "framer-motion";
const HomeFeatureItem = ({
  title,
  subTitle,
  icon: Icon,
  index,
  controls,
}: HomeFeatureItemProps) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="flex flex-col md:items-center gap-2 md:gap-5 mt-4"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div className="bg-red-200 px-2 py-2 rounded-full w-fit">
        <Icon className="size-6 sm:size-7 text-[#B03228]" />
      </div>
      <h2 className="font-semibold md:font-bold text-lg xl:text-xl text-[#332E25]">
        {title}
      </h2>
      <p className="text-gray-600 max-md:text-sm md:text-center text-sm xl:text-base">
        {subTitle}
      </p>
    </motion.div>
  );
};

export default HomeFeatureItem;
