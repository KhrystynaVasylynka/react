import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from './Main'
import { useState } from 'react'


type Props = {}

type CartDataType = {
    totalCount: number
    totalPrice: number

}

const App = (props: Props) => {

    const [CartData, setCartData] = useState<CartDataType>({
        totalCount: 0,
        totalPrice:0,
    })

    const addProductInCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice:prevState.totalPrice + count * price,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={CartData} />
                <Main addProductInCart={addProductInCart}/>
            </StyledEngineProvider>
        </>
    )
}

export default App
