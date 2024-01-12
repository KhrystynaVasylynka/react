
import { Container } from "@mui/material"
import ProductList from "components/Products/ProductList"
import Reviews from "components/Reviews/Reviews"

type Props = {
	addProductInCart: (id:number, count:number) => void
}
const Home = ({ addProductInCart }: Props) => {
	return (
		<>
			<Container>
				<ProductList addProductInCart={addProductInCart}/>
			<Reviews />
			</Container>
		</>
	)
}
export default Home