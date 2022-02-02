import Image from 'next/image'
import hands from '../assets/images/hands.png'

export default function HomeSubSection() {
    return ( 
        <section className="h-full w-full snap-start scroll-mt-[72px] transition-all overflow-y-auto overflow-x-hidden">
        <div className="container mx-auto w-screen px-4 flex justify-between">

            <div className="section__content flex gap-4 flex-col justify-start">

                <h2 className="font-bold text-3xl max-w-[18rem]">
                   WE HELP DESIGN <span className='text-green-300'>YOUR BRAND</span>
                </h2>
                <p className='max-w-xl mb-8 text-gray-400 text-base'>
                We cares much about the quality of design, user experience and overall aesthetucs of every assets associated with your brand.                
                </p>
                <div className="w-full flex">
                    <code className='w-full text-center 0 bg-green-500 mx-4 py-12 rounded-2xl '>
                            This website is currently on building phase ...
                        </code>

                </div>
                <Image
                            src={hands}
                            alt="home-section-1"
                            objectFit='contain'
                            // width={'100px'}
                            height={'300px'}
                            placeholder='blur'
                            className="mb-4 cursor-pointer"
                            priority

                    />
            </div>

        </div>

        </section>
    )
}