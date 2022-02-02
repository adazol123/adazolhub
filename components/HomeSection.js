import Image from 'next/image'
import person from '../assets/images/person.png'
import Behance from '../assets/svg/behance.svg'
import Dribbble from '../assets/svg/dribbble.svg'
import Facebook from '../assets/svg/facebook.svg'
import Twitter from '../assets/svg/twitter.svg'
import { Dots } from './NavSVG'


export default function HomeSection() {

    const social = [
        {
            svg: Behance,
            name: 'Behance',
        },
        {
            svg: Dribbble,
            name: 'Dribbble',
        },
        {
            svg: Facebook,
            name: 'Facebook',
        },
        {
            svg: Twitter,
            name: 'Twitter',
        },
    ]

    return (
        <section className='h-full w-full snap-start scroll-mt-[72px] transition-all overflow-y-auto overflow-x-hidden'>
            <div className="container mx-auto px-4 grid grid-cols-1 place-items-center sm:grid-cols-2">
                <div className="bg-transparent h-72 w-72 top-0  relative ">
                    <Image
                        src={person}
                        alt="home-section-1"
                        objectFit='contain'
                        width={'380px'}
                        placeholder='blur'
                        className="mb-8  absolute transform  z-10 hover:scale-110 transition-all duration-500 ease-in-out" 
                        priority
                        objectPosition={'top'}
                    />
                    <div className="absolute top-0 -right-8">
                        <Dots/>
                    </div>
                </div>
                <div className=" relative flex gap-4 flex-col justify-center mx-2 md:mx-4 ">
                    <div className="z-10 px-8">
                        <h2 className="font-bold whitespace-nowrap text-2xl mb-2">
                            <span className='text-green-300'>EXPERIENCE</span> MATTER
                        </h2>

                        <p className='max-w-xl mb-8 text-gray-500 text-sm'>Your success is our objective. We’ll care for your brand, product and services as much as you do.</p>
                        <button className='px-3 py-2 border border-green-300 text-green-300 rounded-lg text-md'>
                            Contact Us
                        </button>

                    </div>
                    <div className="absolute w-full left-0   bg-[#25303f] opacity-50 h-[260px] -top-14 rounded-2xl"/>

                </div>
            </div>
            {/* <div className="social">
                <div className="container relative mx-auto max-w-md px-4 flex flex-row justify-between ">
                    <div className="absolute bg-slate-700 opacity-70 bg-gradient-to-tr h-[5em] w-[95%] rounded-2xl top-6"/>
                    {social.map( icon => {
                        return (
                            <button key={icon.svg.src} className='hover:-translate-y-3 hover:scale-125 hover:font-bold text-gray-400  hover:text-green-300 grayscale-[30%] hover:grayscale-0 transition-all'>
                                <Image src={icon.svg.src} alt={icon.svg.src} width={icon.svg.width} height={icon.svg.height} />
                                <span className='text-sm '>{icon.name}</span>
                            </button>
                        )
                    })
}                   
                </div>
            </div> */}
        </section>
    )
}