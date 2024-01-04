import {Product, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    producsObject?: {
        [id:number]:Product
    }
}

const CartHeader = ({ productsInCart,
producsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => {
                return (
                    <div key={productId}>
                        {productsArray[+productId].title}:
                        {productsInCart[+productId]}
                    </div>
                )
            })}
        </div>
    )
}
export default CartHeader
