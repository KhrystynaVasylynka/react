import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {
    addProductInCart: (count: number, price: number) => void
}
const ProductList = ({ addProductInCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    margin: '30px 0',
                    textAlign: 'center',
                }}
            >
                List of Product
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        capacity,
                        price,
                        type,
                        image,
                        
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductInCart={addProductInCart}

                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
