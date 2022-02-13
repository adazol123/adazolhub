import React from 'react'
import Card from './Card'
import Container from './Container'
import InfoSquare  from './svg/Platonic.svg';
import Mobile from './svg/MobSVG.svg';
import Chat from './svg/ChatSVG.svg';
import Coin from './svg/CoinSVG.svg';


function Services() {
  return (
   <section id='Portfolio' className=" bg-gradient-to-tr from-[#030309] to-[#162731]
   mx-auto w-full relative  min-h-screen snap-start scroll-mt-20 transition-all space-y-20">
       <div className="container mx-auto w-full  px-4 mb-8 ">
        <p className='text-slate-700'> SERVICES</p>
        <h2 className='text-3xl font-bold'>
            WHAT IS OUR <span className='text-green-300'>GOAL</span>?
        </h2>
        <p className='text-slate-700 max-w-lg font-thin text-sm'>
        We want to provide the full set of services which can help you catch the eye of your target audience. Moreover, the final product will be reliable, scalable and protected, so there is no change to be beaten in your area.
        </p>
       </div>

       <div className="container mx-auto  px-4  gap-y-10 gap-x-2 flex flex-col sm:flex-row flex-wrap  w-full  items-stretch  justify-evenly">
       <Card 
            title = 'Web Development'
            content = 'From the landing page and up to the markeplace, our developers will provide the best solution to be on the top as long as possible. Do you want to use CMS, but you`ve got hesitation about which system to use? Let`s take a look at the concept of product.'
            icon = {<InfoSquare />}
       />
       <Card 
            title = 'Mobile App Development'
            content = 'The application plays an importan role in business. Before placing an app on Goofle Market or App Store. Our team tests every piece of code, becomes achnowledged in your area, then takes care about the `user-friendly` aspect of the application. What do we have as a result? Your customers are always in touch with you.'
            icon = {<Mobile />}
       />
       <Card 
            title = 'Consultancy'
            content = 'Do you need a best SEO solition or you area not sure which stack of technologies siuts your business. Do you want a 24/7 support? We are here to help you.'
            icon = {<Chat />}
       />
       <Card 
            title = 'SEO Optimization'
            content = 'SEO is the most important part of your business. We will help you to get the best results for your website. We will optimize your website for search engines, and make it more attractive. We will make sure that your website will be in the top of the search results.'
            icon = {<Coin />}
       />

       </div>
    </section>
  )
}

export default Services