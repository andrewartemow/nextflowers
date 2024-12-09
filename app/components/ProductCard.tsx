import Image from "next/image"
import Link from "next/link"

import { ProductSimplified } from "../interface"

interface ProductCardProps {
    product: ProductSimplified
}

export const ProductCard = ({ product }: ProductCardProps) => {

    const { images, id, title, price } = product;

    return <div className="group relative">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <Image src={images[0]} alt="Product Image" className="w-full h-full object-cover object-center lg:h-full lg:w-full" width={300} height={300} />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${id}`}>{title}</Link>
                </h3>
            </div>
            <p className="text-sm font-medium text-gray-800">
                ${price}
            </p>
        </div>
    </div>
}