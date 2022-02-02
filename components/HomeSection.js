import Image from 'next/image'
import person from '../assets/images/person.png'
import background_layout from '../assets/images/background_layout.jpg'
import behance from '../assets/images/behance.png'
import dribbble from '../assets/images/dribbble.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import { Dots, Profile, Star } from './NavSVG'


export default function HomeSection() {

    const social = [
        {
            name: 'Behance',
            icon: behance,
            svg: (<>
                    <svg width="35" height="41" viewBox="0 0 35 41" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.7183 27.8459C26.7183 31.6912 21.445 32.1357 17.4795 32.1357L17.1957 32.1355C14.6692 32.1294 8.23833 31.9699 8.23833 27.8226C8.23833 24.0557 13.2997 23.5523 17.2351 23.5333L17.7633 23.533C20.2896 23.5391 26.7183 23.6986 26.7183 27.8459ZM17.4795 25.2827C12.5083 25.2827 9.98833 26.1367 9.98833 27.8226C9.98833 29.5236 12.5083 30.3857 17.4795 30.3857C22.4495 30.3857 24.9683 29.5317 24.9683 27.8459C24.9683 26.1449 22.4495 25.2827 17.4795 25.2827ZM17.4795 8.95361C20.8955 8.95361 23.6733 11.7326 23.6733 15.1486C23.6733 18.5646 20.8955 21.3424 17.4795 21.3424H17.4422C14.0332 21.3319 11.2717 18.5518 11.2833 15.1451C11.2833 11.7326 14.0623 8.95361 17.4795 8.95361ZM17.4795 10.6196C14.9817 10.6196 12.9493 12.6508 12.9493 15.1486C12.9412 17.6383 14.9583 19.6683 17.4457 19.6776L17.4795 20.5106V19.6776C19.9762 19.6776 22.0073 17.6453 22.0073 15.1486C22.0073 12.6508 19.9762 10.6196 17.4795 10.6196Z"/>
                    </svg>

                </>),
        },
        {
            svg: <Profile/>,
            icon: twitter,
            name: 'Twitter',
        },
        {
            name: 'Facebook',
            icon: facebook,
            svg: (<>
                    <svg width="35" height="41" viewBox="0 0 35 41" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.7183 27.8459C26.7183 31.6912 21.445 32.1357 17.4795 32.1357L17.1957 32.1355C14.6692 32.1294 8.23833 31.9699 8.23833 27.8226C8.23833 24.0557 13.2997 23.5523 17.2351 23.5333L17.7633 23.533C20.2896 23.5391 26.7183 23.6986 26.7183 27.8459ZM17.4795 25.2827C12.5083 25.2827 9.98833 26.1367 9.98833 27.8226C9.98833 29.5236 12.5083 30.3857 17.4795 30.3857C22.4495 30.3857 24.9683 29.5317 24.9683 27.8459C24.9683 26.1449 22.4495 25.2827 17.4795 25.2827ZM17.4795 8.95361C20.8955 8.95361 23.6733 11.7326 23.6733 15.1486C23.6733 18.5646 20.8955 21.3424 17.4795 21.3424H17.4422C14.0332 21.3319 11.2717 18.5518 11.2833 15.1451C11.2833 11.7326 14.0623 8.95361 17.4795 8.95361ZM17.4795 10.6196C14.9817 10.6196 12.9493 12.6508 12.9493 15.1486C12.9412 17.6383 14.9583 19.6683 17.4457 19.6776L17.4795 20.5106V19.6776C19.9762 19.6776 22.0073 17.6453 22.0073 15.1486C22.0073 12.6508 19.9762 10.6196 17.4795 10.6196Z"/>
                    </svg>

                </>),
            href: '#Portfolio'
        },
        {
            name: 'Dribbble',
            icon: dribbble,
            svg: (<>
                <svg width="40" height="39" viewBox="0 0 40 39" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.0932 10.5027C19.9871 10.5027 19.7257 10.5319 19.5869 10.8095L17.4566 15.069C17.1194 15.7422 16.4696 16.21 15.7182 16.3174L10.9489 17.0045C10.6339 17.05 10.5266 17.2834 10.4939 17.3814C10.4647 17.4759 10.4181 17.7162 10.6351 17.9239L14.0837 21.2372C14.6332 21.7657 14.8829 22.5275 14.7522 23.273L13.9402 27.9514C13.8901 28.2442 14.0732 28.4145 14.1549 28.4729C14.2412 28.5382 14.4722 28.6677 14.7581 28.5184L19.0222 26.3075C19.6942 25.961 20.4946 25.961 21.1642 26.3075L25.4272 28.5172C25.7142 28.6654 25.9452 28.5359 26.0327 28.4729C26.1144 28.4145 26.2976 28.2442 26.2474 27.9514L25.4331 23.273C25.3024 22.5275 25.5521 21.7657 26.1016 21.2372L29.5502 17.9239C29.7684 17.7162 29.7217 17.4747 29.6914 17.3814C29.6599 17.2834 29.5526 17.05 29.2376 17.0045L24.4682 16.3174C23.7181 16.21 23.0682 15.7422 22.7311 15.0679L20.5984 10.8095C20.4607 10.5319 20.1994 10.5027 20.0932 10.5027ZM14.4897 30.336C14.0079 30.336 13.5296 30.1844 13.1201 29.8857C12.4131 29.3677 12.0666 28.5125 12.2171 27.6515L13.0291 22.9732C13.0594 22.7994 12.9999 22.6232 12.8716 22.4995L9.42289 19.1862C8.78822 18.5784 8.56072 17.68 8.82906 16.8459C9.09972 16.0024 9.81606 15.3992 10.6992 15.2732L15.4686 14.586C15.6529 14.5604 15.8116 14.4472 15.8909 14.2862L18.0224 10.0255C18.4156 9.24035 19.2089 8.75269 20.0932 8.75269C20.9776 8.75269 21.7709 9.24035 22.1641 10.0255L24.2967 14.285C24.3772 14.4472 24.5347 14.5604 24.7179 14.586L29.4872 15.2732C30.3704 15.3992 31.0867 16.0024 31.3574 16.8459C31.6257 17.68 31.3971 18.5784 30.7624 19.1862L27.3137 22.4995C27.1854 22.6232 27.1271 22.7994 27.1574 22.972L27.9706 27.6515C28.1199 28.5137 27.7734 29.3689 27.0652 29.8857C26.3477 30.4119 25.4132 30.483 24.6211 30.07L20.3592 27.8615C20.1924 27.7752 19.9929 27.7752 19.8261 27.8615L15.5642 30.0712C15.2236 30.2485 14.8561 30.336 14.4897 30.336Z"/>
                </svg>

                    </>),
            href: '#About'
        },
    ]

    return (
        <section id='home' className='h-[98%] relative w-full snap-start scroll-mt-[48px] transition-all  overflow-hidden flex flex-col sm:pt-16'>
            <div className='h-full w-full bg-cover bg-center bg-no-repeat  bg-[url(./background_layout.jpg)] absolute opacity-5 bg-blend-multiply blur-sm' />
            <div className="w-full h-screen absolute top-0 hidden bg-slate-700 sm:flex grayscale bg-gradient-to-b  to-slate-800  opacity-20 blur-lg">
                {/* <Image
                    src={background_layout}
                    alt='background'
                    className='absolute container inset-0 h-full w-full object-cover bg-blend-multiply -z-10'
                    height={920}
                    
                /> */}
            </div>
            <div className="container top-0 mx-auto px-2 grid grid-cols-1 place-items-center sm:grid-cols-2 mt-0 relative ">
                <div className="absolute top-5 right-2 w-0">
                        <Dots/>
                    </div>
                <div className="bg-transparent h-72 w-72 top-0  z-20">
                    <Image
                        src={person}
                        alt="home-section-1"
                        objectFit='contain'
                        width={'380px'}
                        height={'380px'}
                        placeholder='blur'
                        className=" absolute transform transition-all duration-500 ease-in-out " 
                        priority
                        objectPosition={'top'}
                    />

                </div>
                <div className=" relative flex gap-4 flex-col justify-center mx-2 md:mx-4 z-10">
                    <div className="z-20 px-8">
                        <h2 className="font-bold whitespace-nowrap text-2xl mb-2">
                            <span className='text-green-300'>EXPERIENCE</span> MATTER
                        </h2>

                        <p className='max-w-xl mb-8 text-gray-500 text-sm'>Your success is our objective. We’ll care for your brand, product and services as much as you do.</p>
                        <button className='px-3 py-2 border border-green-300 text-green-300 rounded-lg text-md'>
                            Contact Us
                        </button>

                    </div>
                    <div className="absolute w-full left-0 z-0  bg-[#25303f] hover:shadow-md shadow-slate-800  h-[260px] -top-14 rounded-2xl"/>

                </div>
            </div>
            <div className="social  h-[30%] w-full flex z-30  px-4">
                <div className="container relative mx-auto item-center max-w-sm mt-6 px-4 flex flex-row justify-between bottom-0">
                    <div className="absolute bg-slate-700 opacity-70 bg-gradient-to-tr h-[5em] w-[100%] rounded-2xl top-[40%] -left-1"/>
                    {social.map( icon => {
                        return (
                            <button key={icon.name} className='hover:-translate-y-3 hover:scale-125 hover:font-bold text-slate-500 fill-gray-400  hover:text-green-300 grayscale-[0%] hover:grayscale-0 transition-all hover:fill-green-400 flex flex-col justify-center items-center'>
                               <Image src={icon.icon} alt={icon.name} width={46} height={46} />
                                <span className='text-sm '>{icon.name}</span>
                            </button>
                        )
                    })
}                   
                </div>
            </div>
        </section>
    )
}