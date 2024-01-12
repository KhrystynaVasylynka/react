import classes from './LikeButton.module.scss'
import { Box } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

type ArticleData = {
    id: number
    isLiked: boolean
    changeLikeArticle(id: number, like: boolean): void
}

const LikeButton = ({ id, isLiked, changeLikeArticle }: ArticleData) => {
    return (
        <>
            <Box
                sx={{
                    display: 'inline-block',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    changeLikeArticle(id, !isLiked)
                }}
            >
                {isLiked ? (
                    <FavoriteIcon
                        className={classes.favorite}
                        sx={{
                            color: 'red',
                            marginRight: '10px',
                            fontSize: '26px',
                        }}
                    />
                ) : (
                    <FavoriteBorderIcon
                        className={classes.favorite}
                        sx={{
                            color: 'red',
                            marginRight: '10px',
                            fontSize: '26px',
                        }}
                    />
                )}
            </Box>
        </>
    )
}

export default LikeButton
