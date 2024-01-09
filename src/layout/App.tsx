import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import { Container } from "@mui/material"
import Home from "pages/Home/Home"
import Footer from 'layout/Footer'
import {omit} from 'lodash'


type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })


   
    const addProductInCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductsFromCart = (id: number) => { 
        setProductsInCart((prevState) => omit(prevState,id))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Container maxWidth="lg" sx={{
padding:'50px 0',
		}}
		>
                <Routes>
                        <Route
                            path='/'
                            element={<Home addProductInCart={addProductInCart} />}
                        />
                        <Route
                            path='cart' element={<CartPage
                                removeProductFromCart={removeProductsFromCart}
                                productsInCart={productsInCart} />} />
                    </Routes>
                    <Footer />
                    </Container>
               
            </StyledEngineProvider>
        </>
    )
}

export default App
