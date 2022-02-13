import React from 'react';

function Container({ children, id , nav=false }) {
  return( 
    <section id={id} className={
      ['container mx-auto w-full overflow-hidden p-4 snap-start scroll-mt-12 min-h-[calc(100vh-var(--nav-height))]'].join(' ')}>
        {children}
    </section>
    )
}

export default Container;
