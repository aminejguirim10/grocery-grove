"use client"
import Link from "next/link"
import { Popover } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

import { NavLinks } from "@/components/layout/home-navLinks"

function MenuIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

import { ReactNode } from "react"
import Image from "next/image"

function MobileNavLink({
  children,
  href,
  ...props
}: {
  children: ReactNode
  href: string
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export default function HomeNavbar() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Image
                  src={"/assets/logo.png"}
                  alt="logo"
                  width={200}
                  height={200}
                  className="h-8 w-auto"
                />
                <span>GroceryGrove</span>
              </div>
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/">Shop Now</MobileNavLink>
                            <MobileNavLink href="/">Specials</MobileNavLink>
                            <MobileNavLink href="/">Recipes</MobileNavLink>
                            <MobileNavLink href="/">More</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Link
                              href={"/"}
                              className={buttonVariants({ variant: "outline" })}
                            >
                              See all articles
                            </Link>
                            <Link
                              href={"/"}
                              className={buttonVariants({ variant: "default" })}
                            >
                              Sign Up
                            </Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Link
              href={"/"}
              className={buttonVariants({
                variant: "outline",
                className: "hidden lg:block",
              })}
            >
              See all articles
            </Link>

            <Link
              href={"/"}
              className={buttonVariants({
                variant: "default",
                className: "hidden lg:block",
              })}
            >
              Sign Up
            </Link>
          </div>
        </Container>
      </nav>
    </header>
  )
}
