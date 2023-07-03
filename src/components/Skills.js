import {motion} from 'framer-motion'

const Skill = ({name, x,y}) => {
    return <motion.div className={`flex items-center justify-center rounded-full bg-gray-800 text-lime-300 p-3 px-6 shadow-dark
    cursor-pointer absolute hover:animate-pulse font-bold dark:text-dark dark:bg-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
    `}
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y, transition:{duration: 1.5}}}
    // transition={{duration: 1.5}}
    viewport={{once: true}}
    >
        {name}
    </motion.div>
}
const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-gray-800 dark:text-light text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    ">
    <motion.div className="flex items-center justify-center rounded-full bg-gray-800 text-lime-300 p-8 shadow-dark hover:animate-pulse
    cursor-pointer font-bold dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
    whileHover={{scale:1.05}}
    >
        Web
    </motion.div>
    <Skill name="HTML" x="-19vw" y="2vw"  />
    <Skill name="CSS" x="0vw" y="-12.1vw"  />
    <Skill name="JavaScript" x="17vw" y="6vw"  />
    <Skill name="React" x="0vw" y="12vw"  />
    <Skill name="Github" x="0vw" y="20vw"  />
    <Skill name="Bootstrap" x="-20vw" y="-15vw"  />
    <Skill name="Tailwind" x="15vw" y="-13vw"  />
    <Skill name="Firebase" x="38vw" y="-5vw"  />
    <Skill name="Node.js" x="0vw" y="-20vw"  />
    <Skill name="Express.js" x="-25vw" y="18vw"  />
    <Skill name="MongoDb" x="18vw" y="17vw"  />
    <Skill name="Rest API" x="-32vw" y="0.5vw"  />
    <Skill name="JWT" x="32vw" y="0.5vw"  />
    <Skill name="Stripe" x="-15vw" y="12.5vw"  />
    </div>
    </>
  )
}

export default Skills