import Head from "next/head"
import AnimatedText from '../components/AnimatedText'
import Layout from "@/components/Layout"
import Image from "next/image"
import profilePic from "../../public/images/profile/IMG_Imran.jpg"
import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
import TransitionEffect from "@/components/TransitionEffect"
const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}
const About = () => {
    return (
        <>
            <Head>
                <title>Imran | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className='pt-16 mt-2'>
                    <AnimatedText text="Engineering Excellence for a Digital World" className="!text-5xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-2xl font-bold pt-6 uppercase dark:text-light text-gray-900/75">Biography</h2>
                            <p className="pt-2 font-medium">
                                Hi, I&apos;m Imran Ahmed Khan, a software engineer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. I am always looking for
                                new and innovative ways to bring my clients&apos; visions to life.
                            </p>

                            <p className="my-8 font-medium">
                                I think that design is about more than just making things look pretty – it&#39;s about solving problems and creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className="font-medium ">
                                I am dedicated to delivering design excellence and user-centric thinking to every digital project I undertake, whether it&apos;s a website or any other digital product. I am excited about the prospect of applying my skills and passion to your next endeavor.
                            </p>
                        </div>
                        <div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-gray-800 dark:bg-light" />
                            <Image src={profilePic} className="w-full h-auto rounded-2xl" alt="Imran"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} /> +
                                </span>
                                <h2 className="text-xl dark:text-light font-medium capitalize text-gray-800/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={3} />  +
                                </span>
                                <h2 className="text-xl dark:text-light font-medium capitalize text-gray-800/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Certifications</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                </Layout>
            </main>
        </>
    )
}

export default About