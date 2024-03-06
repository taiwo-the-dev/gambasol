import React, { ReactNode } from 'react';

interface propType {
    children: ReactNode;
}

const Wrapper = ({children}:propType) => {
  return (
    <div className="container mx-auto flex flex-col gap-5 max-sm:pt-5 md:pt-3 pb-5 px-2.5 transition-all duration-250 ease-in-out sm:px-10 sm:pt-2 md:max-w-7xl">
        {children}
    </div>
  )
}

export default Wrapper;