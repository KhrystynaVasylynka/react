import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {
    addProductInCart: (id: number, count: number) => void
    likeState: {
        [id: number]: boolean
    }
    changeLikeArticle(id: number, like: boolean): void
}

const ProductList = ({
    addProductInCart,
    likeState,
    changeLikeArticle,
}: Props) => {
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
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductInCart={addProductInCart}
                                isLiked={likeState[id]}
                                changeLikeArticle={changeLikeArticle}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
