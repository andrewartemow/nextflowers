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
    price_id: string,
    id: number
}

const CheckoutNow = ({ price_id }: ProductCart) => {

    const { checkoutSingleItem, clearCart } = useShoppingCart();
    // const product = {
    //     name,
    //     description,
    //     price,
    //     currency,
    //     image: image,
    //     price_id,
    // }

    return (
        <Button variant="secondary" onClick={() => {
            checkoutSingleItem(price_id);
            clearCart();
        }}>
            Checkout Now
        </Button>
    )
}

export default CheckoutNow