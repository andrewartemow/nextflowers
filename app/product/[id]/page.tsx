import React from 'react'
import supabase from '@/config/supabaseClient';

// import ImageGallery from '@/app/components/ImageGallery';
import { Button } from '@/components/ui/button';
import ImageGallery from '@/app/components/ImageGallery';
import AddToBag from '@/app/components/AddToBag';
import { Star, Truck } from 'lucide-react';

import { FullProduct } from '@/app/interface';
import CheckoutNow from '@/app/components/CheckoutNow';

async function getData(id: number) {
    const { data, error } = await supabase.from('products').select().eq("id", id);

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}

const ProductPage = async ({ params }: { params: Promise<{ id: number }> }) => {

    const { id } = await params;

    const data = await getData(id) as FullProduct[];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data[0].images} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">
                                {data[0].categoryName}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data[0].title}</h2>
                        </div>
                        <div className="mb-6 flex items-center gap-3 md:mb-10">
                            <Button className="rounded-full gap-x-2">
                                <span className="text-sm">{data[0].rating}</span>
                                <Star className="h-5 w-5" />
                            </Button>

                            <span className="text-sm text-gray-500 transition duration-500">
                                56 Ratings
                            </span>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                                    ${data[0].price}
                                </span>
                                <span className="mb-0.5 text-red-500 line-through">
                                    ${Number.parseFloat((data[0].price + 30).toString()).toFixed(2)}
                                </span>
                            </div>

                            <span className="text-sm text-gray-500">
                                Incl. Vat plus shipping
                            </span>
                        </div>

                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <Truck className="w-6 h-6" />
                            <span className="text-sm">
                                2-4 Day Shipping
                            </span>
                        </div>

                        <div className="flex gap-2.5">
                            <AddToBag currency="USD" description={data[0].description} image={data[0].images[0]} name={data[0].title} price={data[0].price} price_id={data[0].price_id} key={data[0].id} />
                            <CheckoutNow currency="USD" description={data[0].description} image={data[0].images[0]} name={data[0].title} price={data[0].price} price_id={data[0].price_id} id={data[0].id} key={data[0].id + 1} />
                        </div>

                        <p className="mt-6 text-base text-gray-500 tracking-wide">{data[0].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage