import Button from '@mui/material/Button'
import CartHeader from 'components/CartHeader/CartHeader'


type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
				<Button color="inherit">Cart</Button>
				{/* <CartHeader /> */}
        </>
    )
}
export default Menu
