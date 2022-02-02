import Image from 'next/image'
import hands from '../assets/images/hands.png'

export default function HomeSubSection() {
    return ( 
        <section id='services' className="h-[calc(100%)] w-full snap-start scroll-mt-12 transition-all overflow-y-auto overflow-x-hidden">
        <div className="container mx-auto w-screen h-[100vh] px-4 flex justify-between ">

            <div className="section__content flex gap-4 flex-col justify-start pt-8 ">

                <h2 className="font-bold text-3xl max-w-[18rem]">
                   WE HELP DESIGN <span className='text-green-300'>YOUR BRAND</span>
                </h2>
                <p className='max-w-xl mb-8 text-gray-400 text-base'>
                We cares much about the quality of design, user experience and overall aesthetucs of every assets associated with your brand.                
                </p>
                <div className="w-full grid  place-content-center">
                    <span className='text-gray-500 text-center font mb-4'>   February 1, 2022</span>
                    <code className='text-center 0 bg-slate-800 rounded-2xl  mx-4 p-14  max-w-4 text-green-300 shadow-inner shadow-black'>
                        
                            This website is currently on building phase ...
                        </code>

                </div>
                <Image
                            src={hands}
                            alt="home-section-1"
                            objectFit='contain'
                            // width={'100px'}
                            height={'380px'}
                            placeholder='blur'
                            className="mb-4 cursor-pointer"
                            priority

                    />
            </div>

        </div>

        </section>
    )
}