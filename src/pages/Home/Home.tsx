import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductInCart: (id: number, count: number) => void
    likeState: {
        [id: number]: boolean
    }
    changeLikeArticle(id: number, like: boolean): void
}

const Home = ({ addProductInCart, likeState, changeLikeArticle }: Props) => {
    return (
        <>
            <Container>
                <ProductList
                    addProductInCart={addProductInCart}
                    likeState={likeState}
                    changeLikeArticle={changeLikeArticle}
                />
                <Reviews />
            </Container>
        </>
    )
}
export default Home
