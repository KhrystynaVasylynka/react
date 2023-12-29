import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Home from 'pages/Home/Home'
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

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={CartData} />
                <Home />
            </StyledEngineProvider>
        </>
    )
}

export default App
