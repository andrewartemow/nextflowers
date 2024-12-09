"use client"

import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { Button } from '@/components/ui/button'

interface ProductCart {
    name: string,
    description: string,
    price: number,
    currency: string,
    image: string,
    price_id: string
}

const AddToBag = ({ name, description, price, currency, image, price_id }: ProductCart) => {

    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name,
        description,
        price,
        currency,
        image: image,
        price_id,
    }

    return (
        <Button onClick={() => {
            addItem(product);
            handleCartClick()
        }}>
            Add To Cart
        </Button>
    )
}

export default AddToBag