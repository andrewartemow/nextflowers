import React from 'react'
import supabase from '@/config/supabaseClient';

import { ProductCard } from '../components/ProductCard';
import { FailedToLoad } from '../components/FailedToLoad';

import { ProductSimplified } from '../interface';

async function getData(category: string) {
    if (category !== "all-products") {
        const { data, error } = await supabase.from('products').select("title, price, images, categoryName, id").eq("categoryName", category);

        if (error) {
            console.error(error);
            return [];
        }

        return data;
    }

    const { data, error } = await supabase.from('products').select("title, price, images, categoryName, id")

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}

const CategoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {

    const { category } = await params;
    const data = await getData(category) as ProductSimplified[];

    const firstLetter = category.charAt(0).toUpperCase();
    const remainingLetters = category.substring(1)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{firstLetter + remainingLetters}</h2>
                </div>
                {data.length ? <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product: ProductSimplified) => <ProductCard product={product} key={product.id} />)}
                </div> : <FailedToLoad />}
            </div>
        </div>
    )
}

export default CategoryPage