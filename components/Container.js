import React from 'react';

function Container({ children }) {
  return( 
    <section id='home' className='container mx-auto p-4 snap-start scroll-mt-12 min-h-[calc(100vh-var(--nav-height))]'>
        {children}
    </section>
    )
}

export default Container;
