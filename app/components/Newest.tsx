import supabase from '@/config/supabaseClient';
import React from 'react'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { FailedToLoad } from './FailedToLoad';

import { ProductSimplified } from '../interface';

async function getData() {
    const { data, error } = await supabase.from('products').select().limit(4);

    if (error) {
        console.error(error);
        return []
    }

    return data;
}

const Newest = async () => {

    const data = await getData() as ProductSimplified[];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Newest Products</h2>
                    <Link className="text-primary flex items-center gap-x-1" href="/all-products">See All <span><ArrowRight /></span></Link>
                </div>
                {data.length ? <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product: ProductSimplified) => <ProductCard product={product} key={product.id} />)}
                </div> : <FailedToLoad />}
            </div>
        </div>
    )
}

export default Newest;