import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import {BsArrowRight} from 'react-icons/bs'
import { LinkArrow } from '@/components/Icons'
import Link from 'next/link'
const contact = () => {
    const fadeIn = (direction, delay) => {
        return {
          hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
              type: 'tween',
              duration: 1.5,
              delay: delay,
              ease: [0.25, 0.6, 0.3, 0.8],
            },
          },
          show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              type: 'tween',
              duration: 1.4,
              delay: delay,
              ease: [0.25, 0.25, 0.25, 0.75],
            },
          },
        };
      };

      const submit =(event)=>{
        event.preventDefault()
        const form = event.target
        window.my_modal_5.showModal()
        form.reset()
      }

  return (
    <>
         <Head>
                <title>Imran | Contact Page</title>
                <meta name="description" content="any description" />
                {/* <link rel="icon" href="/public/images/profile/My pic.png" /> */}
            </Head>
            <TransitionEffect />
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Successful!</h3>
    <p className="py-4">Your query has been submitted</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
            {/* <h2 className='text-4xl text-dark'>Let's Get in Touch</h2> */}
            <section className='grid grid-cols-12 gap-4 p-10'>
                <div className='col-span-8 sm:col-span-12 order-2'>
<div className='flex mx-auto py-32 text-center min-[1280px]:text-left
            items-center justify-center h-full bg-white dark:bg-gray-900 rounded-2xl'>
                <div className='flex flex-col w-full max-w-[700px] '>
                <h2 className='text-4xl text-dark dark:text-white pb-10 font-bold'>Let's Get in Touch</h2>
                <form onSubmit={(event)=>submit(event)} className='flex flex-col gap-6 w-full mx-auto'>
                    <div className='flex sm:flex-col sm:px-4 sm:gap-y-6 gap-x-6 w-full'>
                        <input type="text" required placeholder='name' className=' w-full h-[52px] rounded-lg pl-6 capitalize bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'  />
                        <input type="email" required placeholder='email' className='w-full h-[52px] rounded-lg pl-6 capitalize bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'  />
                    </div>
            <div className='sm:px-4'>
            <input type="text" placeholder='subject' required className='w-full sm:px-4 h-[52px] rounded-lg pl-6 capitalize bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'  />

            </div>
            <div className='sm:px-4'>
            <textarea placeholder='message' required className='w-full h-[180px] p-6 capitalize rounded-lg resize-none bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'></textarea>

            </div>
                        <div className='flex items-center self-start lg:self-center mt-2'>
                <button 
                className='flex group items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base'
                >
                  Submit
                  <LinkArrow className={"w-6 ml-1 group-hover:animate-bounce group-hover:pt-1"} />
                </button>
              </div>
                </form>
                </div>

            </div>
                </div>
                <div className='col-span-4 sm:col-span-12 order-1 h-full bg-white dark:bg-gray-900  flex flex-col gap-10 items-center justify-center sm:pb-8 rounded-2xl'>
<h2 className='text-3xl sm:text-xl sm:pt-6 font-semibold text-dark dark:text-light'>For Any Queries</h2>
<h2 className='text-3xl sm:text-xl font-semibold text-dark dark:text-light'>Imran Ahmed Khan</h2>
<h3 className='text-xl sm:text-sm font-medium text-dark dark:text-light'><span className='font-semibold'>Email:</span> imran.k.professional@gmail.com</h3>
<h3 className='text-xl sm:text-sm font-medium text-dark dark:text-light'><span className='font-semibold'>Contact:</span> +8801876206292, +8801731309679</h3>
                </div>

            </section>
            {/* <div className='flex mx-auto py-32 text-center min-[1280px]:text-left
            items-center justify-center h-full bg-white'>
                <div className='flex flex-col w-full max-w-[700px] '>
                <h2 className='text-4xl text-dark'>Let's Get in Touch</h2>
                <form className='flex flex-col gap-6 w-full mx-auto'>
                    <div className='flex sm:flex-col sm:px-4 sm:gap-y-6 gap-x-6 w-full'>
                        <input type="text" placeholder='name' className=' w-full h-[52px] rounded-lg pl-6 capitalize bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'  />
                        <input type="email" placeholder='email' className='w-full h-[52px] rounded-lg pl-6 capitalize bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'  />
                    </div>
            <div className='sm:px-4'>
            <input type="text" placeholder='subject' className='w-full sm:px-4 h-[52px] rounded-lg pl-6 capitalize bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'  />

            </div>
            <div className='sm:px-4'>
            <textarea placeholder='message' className='w-full h-[180px] p-6 capitalize rounded-lg resize-none bg-gray-100 focus:ring-1 focus:ring-dark border border-white/20 placeholder:text-black placeholder:font-mont'></textarea>

            </div>
                        <div className='flex items-center self-start lg:self-center mt-2'>
                <button 
                className='flex group items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base'
                >
                  Submit
                  <LinkArrow className={"w-6 ml-1 group-hover:animate-bounce group-hover:pt-1"} />
                </button>
              </div>
                </form>
                </div>

            </div> */}



    </>
  )
}

export default contact