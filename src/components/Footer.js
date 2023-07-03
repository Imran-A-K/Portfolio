import Link from "next/link"
import Layout from "./Layout"
import { HiOutlineDesktopComputer } from "react-icons/hi";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-800 font-medium text-lg
    dark:text-light dark:border-light sm:text-base
    ">
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex lg:py-2 group hover:font-bold transition-all duration-500 gap-4 items-center"> Developer <HiOutlineDesktopComputer className="text-blue-800 text-2xl group-hover:animate-bounce" />
            <Link href="/" >Imran</Link>
            </div>
            <Link href="mailto:imran.k.professional@gmail.com" className="hover:font-bold transition-all duration-500">Get in Touch</Link>
        </Layout>
    </footer>
  )
}

export default Footer