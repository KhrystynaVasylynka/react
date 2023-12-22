import { Container } from "@mui/material"
import ProductList from "components/Products/ProductList"

type Props = {}
const Home = (props: Props) => {
	return (
		<>
			<Container>
				<ProductList />
			</Container>
		</>
	)
}
export default Home