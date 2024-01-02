import { Container } from "@mui/material"
import ProductList from "components/Products/ProductList"

type Props = {
	addProductInCart: (count: number, price: number) => void
}
const Home = ({ addProductInCart }: Props) => {
	return (
		<>
			<Container>
				<ProductList addProductInCart={addProductInCart}/>
			</Container>
		</>
	)
}
export default Home