import { Icons } from "@/components/shared/icons"
import Image from "next/image"
import Link from "next/link"

const navigations = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/amine.jguirim10/",
    icon: (
      <Icons.facebook
        className="size-6 text-gray-400 transition-colors hover:text-blue-500"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aminejguirim/",
    icon: (
      <Icons.instagram
        className="size-6 text-gray-400 transition-colors hover:text-pink-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/aminejguirim10",
    icon: (
      <Icons.github
        className="size-6 text-gray-400 transition-colors hover:text-gray-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amine-jguirim-817a65267/",
    icon: (
      <Icons.linkedin
        className="size-6 text-gray-400 hover:text-blue-600"
        aria-hidden="true"
      />
    ),
  },
]

export default function HomeFooter() {
  return (
    <section className="flex flex-col gap-6 md:pb-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 md:gap-6">
        <div className="size-[40px]">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.png"}
              width={200}
              height={200}
              alt="Logo"
              className="size-[40px]"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-center font-semibold text-gray-500 max-sm:text-sm md:flex-row md:gap-6">
          <Link href={"/"}>Shop Now</Link>
          <Link href={"/"}>Specials</Link>
          <Link href={"/"}>Recipes</Link>
          <Link href={"/"}>About Us</Link>
          <Link href={"/"}>Contact Us</Link>
        </div>
      </div>
      <footer>
        <div className="mx-auto max-w-7xl border-t border-t-gray-400 px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigations.map((item) => (
              <a key={item.name} href={item.href} className={"text-gray-400"}>
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <div className="mt-6 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Amine Jguirim, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
