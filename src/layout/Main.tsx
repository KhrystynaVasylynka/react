import Home from "pages/Home/Home"
import { Container } from "@mui/material"


type Props = {
	addProductInCart: (id:number, count:number) => void
}
const Main = ({ addProductInCart }: Props) => {
	return (
		<Container maxWidth="lg" sx={{
padding:'50px 0',
		}}
		>
		<Home addProductInCart={addProductInCart} />
		</Container>
	)
}

export default Main