import { motion } from "framer-motion"
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
  }
  return (
    <motion.div
      className="mt-4 flex flex-col gap-2 md:items-center md:gap-5"
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <div className="w-fit rounded-full bg-red-200 px-2 py-2">
        <Icon className="size-6 text-[#B03228] sm:size-7" />
      </div>
      <h2 className="text-lg font-semibold text-[#332E25] md:font-bold xl:text-xl">
        {title}
      </h2>
      <p className="text-sm text-gray-600 max-md:text-sm md:text-center xl:text-base">
        {subTitle}
      </p>
    </motion.div>
  )
}

export default HomeFeatureItem
