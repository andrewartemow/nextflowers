import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Hero = async () => {

    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Beautiful Flowers, Cheap Prices!</h1>
                    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                        Discover the perfect balance of beauty and affordability with our stunning flower selection. We believe everyone deserves gorgeous blooms without the high price tag. From vibrant bouquets to elegant arrangements, our flowers are crafted to make every moment special—delivered fresh and priced to fit any budget.
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                        <Image src="/assets/hero1.webp" alt="heroImage1" className="h-full w-full object-cover object-center" width={500} height={500} priority />
                    </div>

                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image src="/assets/hero2.webp" alt="heroImage2" className="h-full w-full object-cover object-center" width={500} height={500} priority />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-80 divide-x overflow-hidden rounded-lg border">
                    <Link href="/plants" className="flex w-1/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Plants</Link>
                    <Link href="/flowers" className="flex w-1/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Flowers</Link>
                    <Link href="/planters" className="flex w-1/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Planters</Link>
                    <Link href="/all-products" className="flex w-1/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">All</Link>
                </div>
            </div>
        </section >
    )
}

export default Hero;