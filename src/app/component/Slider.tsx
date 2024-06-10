import React from 'react'

const Slider = () => {
    return (
        <div className='slider m-auto w-full flex justify-center '>

            <div className="overlay align-middle m-auto w-full flex justify-center items-center ">

                <div className="container inline-block text-center items-center align-middle">
                    <p className="mb-6 text-lg font-normal c-yellow lg:text-xl sm:px-16 xl:px-48">Life has its own flavor.</p>
                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-7xl dark:text-white">Best Bakery in Town</h1>
                    <p className="mb-6 text-lg font-normal c-light-yellow lg:text-xl sm:px-16 xl:px-48">Creating a unique bakery shopping experience.</p>
                    <a href="/about" className=" btn border-btn">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Slider