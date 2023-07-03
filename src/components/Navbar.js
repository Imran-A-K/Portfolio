import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { FacebookIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark
    absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
    ${router.asPath === href ? 'w-full' : 'w-0'} 
    dark:bg-light `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleCLick = () => {
    toggle();
    router.push(href)
  }
  return (
    <button 
    onClick={handleCLick}
    href={href} className={`${className} relative group text-light dark:text-dark my-2`}>
      {title}
      <span className={`h-[1px] inline-block bg-light dark:bg-dark
    absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300
    ${router.asPath === href ? 'w-full' : 'w-0'} 
    dark:bg-dark `}>&nbsp;</span>
    </button>
  )
}

const Navbar = () => {
  const [mode,setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <header
      className='w-full lg:px-16 md:px-12 sm:px-8  z-10 px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'
    >
      <button className='hidden lg:flex flex-col justify-center items-center' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-1'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      {/* <div className='w-full flex justify-between items-center lg:hidden'>
      <nav>
        <CustomLink href="/" title={"Home"} className='mr-4' />
        <CustomLink href="/About" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/contact" title="Contact" className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap '>

        <motion.a href="https://www.linkedin.com/in/imran-khan-0001/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.facebook.com/imran.ahmedkhan.12382/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
          <FacebookIcon />
        </motion.a>
        <motion.a href="https://github.com/Imran-A-K" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 ml-3'
        >
          <GithubIcon />
        </motion.a>
        <button
         onClick={()=>
         setMode(mode === "light" ? "dark" : "light"
         
         )}
       
        className={`ml-3 items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-gray-800 text-light" : "text-dark bg-light"}`}
        >
      {
        mode === "dark" ? 
        <SunIcon className={"fill-dark"} /> :
        <MoonIcon className={"fill-dark"} />
      }
        </button>
      </nav>
      </div> */}
      <div className='w-full flex justify-between items-center lg:hidden'>
      
      <nav className='flex items-center justify-center flex-wrap '>

        <motion.a href="https://www.linkedin.com/in/imran-khan-0001/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.facebook.com/imran.ahmedkhan.12382/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        >
          <FacebookIcon />
        </motion.a>
        <motion.a href="https://github.com/Imran-A-K" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 ml-3'
        >
          <GithubIcon />
        </motion.a>
        <button
         onClick={()=>
         setMode(mode === "light" ? "dark" : "light"
         
         )}
       
        className={`ml-3 items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-gray-800 text-light" : "text-dark bg-light"}`}
        >
      {
        mode === "dark" ? 
        <SunIcon className={"fill-dark"} /> :
        <MoonIcon className={"fill-dark"} />
      }
        </button>
      </nav>
      <nav>
        <CustomLink href="/" title={"Home"} className='mr-4' />
        <CustomLink href="/About" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/contact" title="Contact" className='ml-4' />
      </nav>
      </div>
      {
        isOpen ? <motion.div
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
        '>
        <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href="/" title={"Home"} className='' toggle={handleClick}/>
          <CustomMobileLink href="/About" title="About" className='' toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
          <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick} />
        </nav>
        <nav className='flex items-center justify-center flex-wrap mt-2'>
  
          <motion.a href="https://www.linkedin.com/in/imran-khan-0001/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-6 mx-3 sm:mx-1'
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://www.facebook.com/imran.ahmedkhan.12382/" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-6 mx-3 sm:mx-1'
          >
            <FacebookIcon />
          </motion.a>
          <motion.a href="https://github.com/Imran-A-K" target={"_blank"}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-6 ml-3 dark:bg-dark rounded-full bg-light sm:mx-1'
          >
            <GithubIcon />
          </motion.a>
          <button
           onClick={()=>
           setMode(mode === "light" ? "dark" : "light"
           
           )}
         
          className={`ml-3 sm:ml-1 items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-gray-800 text-light" : "text-dark bg-light"}`}
          >
        {
          mode === "dark" ? 
          <SunIcon className={"fill-dark"} /> :
          <MoonIcon className={"fill-dark"} />
        }
          </button>
        </nav>
        </motion.div>
        : null
      }
      <div className='absolute left-[50%] top-4 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar