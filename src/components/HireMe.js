import Link from "next/link"
import { CircularText } from "./Icons"

const HireMe = () => {
  return (
    <div
    className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:-top-3 md:bottom-auto md:absolute
    "
    >
        <div className="w-48 md:w-24 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link href="mailto:imran.k.professional@gmail.com"
        className="flex items-center justify-center 
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        bg-gray-800 text-teal-100 shadow-md border border-solid border-dark
        h-20 w-20 rounded-full 
        font-semibold hover:bg-light hover:text-gray-800 hover:border-2 transition-all duration-500 ease-in-out
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                md:w-12 md:h-12 md:text-[10px]
        "
        >Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe