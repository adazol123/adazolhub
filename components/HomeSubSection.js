import Image from 'next/image'
import { Penta } from '../components/NavSVG'
export default function HomeSubSection() {
    return ( 
        <section id='services' className="bg-gradient-to-br from-[#030309] to-[#162731] h-[calc(100%)] w-full snap-start scroll-mt-0 transition-all overflow-y-auto overflow-x-hidden">
        <div className="container relative mx-auto w-screen h-[100vh] px-4 flex justify-end pt-12">
            <div className="section__content grid gap-8  flex-col content-start">
            <div className="hero__cover bg-[url(./meeting.png)] w-full h-[28rem] bg-cover bg-no-repeat bg-left bg-blend-overlay"/>

        <div className="content mx-4 w-[calc(100%-2rem)] h-full flex flex-col content-start items-center sm:items-end text-center sm:text-right ">
                <h2 className="font-bold text-4xl max-w-[24rem] mb-4">
                   WE HELP DESIGN <span className='text-green-300'>YOUR BRAND</span>
                </h2>
                <p className='max-w-lg px-3 sm:px-0 mb-8 text-slate-500 text-base'>
                We cares much about the quality of design, user experience and overall aesthetucs of every assets associated with your brand.                
                </p>

        </div>
                <div className=" transition-opacity duration-700 absolute opacity-0 md:opacity-50 md:flex left-0 top-0 w-s h-24">
                    <Penta/>
                </div>
            </div>

        </div>


        </section>
    )
}