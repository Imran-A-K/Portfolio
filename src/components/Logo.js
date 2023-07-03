import React from 'react'
import logo from "../../public/images/profile/Imran_logo.png"
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-20 h-10 bg-gray-800 text-light flex items-center justify-center
        rounded-lg text-xl font-bold float-left border border-solid border-transparent dark:border-light
        '
        whileHover={{
            backgroundColor:["#121212","#3498c9", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","#34c9bd", "#121212"],
            transition:{duration:1, repeat: Infinity}
            }}
        >
            Imran
            {/* <Image src={logo} alt='logo' /> */}
</MotionLink>
    </motion.div>
  )
}

export default Logo