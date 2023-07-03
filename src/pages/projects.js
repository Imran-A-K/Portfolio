import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import featuredProjectImg from "../../public/images/projects/Featured Project.png"
import project_1_img from '../../public/images/projects/Project-1.png'
import project_2_img from '../../public/images/projects/Project-2.png'
import { motion } from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect"
const FramerImage = motion(Image)
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-center rounded-3xl rounded-br-2xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gray-800 rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg
            lg:w-full
            "
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary  font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" 
                    className="w-10"
                    >
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank"
                    className="ml-4 rounded-lg bg-dark text-light p-2 px-2 text-lg font-semibold
                    dark:text-dark dark:bg-light sm:px-4 sm:text-base
                    ">
                        Live Site
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github,summary }) =>{
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-gray-800 rounded-br-3xl
            dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                  whileHover={{scale:1.05}}
                  transition={{duration:0.2}}
                  priority
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary  font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" 
                    className="w-10 md:w-8"
                    >
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank"
                    className="ml-4 rounded-lg bg-dark text-light p-2 px-2 text-lg font-semibold dark:text-dark dark:bg-light md:text-base">
                        Live Site
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Imran | Project Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="mt-2">
                    <AnimatedText text={"Where innovation meets execution"} className="text-6xl text-gray-800 mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject 
                            title="Camp Ninja"
                            link="https://camp-ninja.web.app/"
                            type="Featured Project"
                            img={featuredProjectImg}
                            summary={`Conditional dashboard rendering is implemented based on the users (Admin, Student, Instructor).
                            Admin has complete control over the site’s activities, whereas Instructor can see their class activities and submit extra classes for admin review.
                             Students can only enroll at the admin approved classes can delete a class from their cart, enroll in them
                            by making payment.`}
                            github={"https://github.com/Imran-A-K/Camp-ninja-client"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                            title="Xtreme Wheelz"
                            link="https://xtremewheelz-75513.web.app/"
                            type="Featured Project"
                            img={project_1_img}
                            summary={`This is sports car toy selling web app.Database crud operations and authentication is implemented.`}
                            github={"https://github.com/Imran-A-K/xtreme-wheelz-client"}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project
                            title="Spice Fusionista"
                            link="https://spicefusionista.web.app/"
                            type="Featured Project"
                            img={project_2_img}
                            summary={`This is a italian cuisine recipe seller web app. Authentication system and conditional route rendering implemented.`}
                            github={"https://github.com/Imran-A-K/spice-fusionista-client-side-code"}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects