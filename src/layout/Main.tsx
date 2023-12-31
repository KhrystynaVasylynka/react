import Home from "pages/Home/Home"
import { Container } from "@mui/material"


type Props = {}

const Main = (props: Props) => {
	return (
		<Container maxWidth="lg" sx={{
padding:'50px 0',
		}}
		>
		<Home />
		</Container>
	)
}

export default Main