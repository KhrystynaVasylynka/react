import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import Menu from '../components/Menu/Menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'green',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <Logo />
                        <Menu />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header
