import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
	text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'телефон дуже потужний',
        },
        {
            name: 'Bob',
            text: 'супер',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
	}
	
	const onSend = (e: React.FormEvent) => {
		e.preventDefault()
		if (newReview.name === "" || newReview.text === "") {
			alert('All fields are required!')
		} else {
			setReviews((preState) => {
				return [...preState, newReview]
			})
			setNewReview({
				name: '',
				text:'',
			})
		}
	}

    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '40px 0',
                }}
            >
                Reviews
            </Typography>
            <div>
                {reviews.map(({ name, text, }) => (
                    <Card
                        variant="outlined"
                        sx={{
                            margin: '20px 0',
										}}
										// key={i}
                    >
                        <CardContent>
                            <div>{name}:</div>
                            <div>{text}</div>
                        </CardContent>
                        
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave a review </h3>
                <div>
                    <TextField
                        label="Your name"
                        size="small"
                        onChange={handleChangeName}
                        value={newReview.name}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Tour text"
                        value={newReview.text}
                        onChange={handleChangeText}
                    />
                </div>
                <Button type='submit' variant="outlined">Send</Button>
            </form>
        </>
    )
}

export default Reviews
