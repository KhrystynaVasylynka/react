import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from './Main'
import { useState } from 'react'

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
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main addProductInCart={addProductInCart} />
            </StyledEngineProvider>
        </>
    )
}

export default App
