import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { Component } from 'react'
import { count } from 'console'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type State = {
    count: number
    color: string
    disabled: boolean
}

class ProductListItem extends Component<ProductListItemType, State> {
    state = {
        count: 1,
        color: 'green',
        disabled: true,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
            disabled: false,
        }))
    }

    onDecrementClick() {
        this.setState((prevState) => ({
            count:
                prevState.count === 1 ? prevState.count : prevState.count - 1,
            disabled: prevState.count <= 2 ? true : false,
        }))
    }

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }

    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card className="product-list-item" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt={title} />
                    </div>
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div>
                        Color:{' '}
                        <span className={`${this.state.color}`}>
                            {this.state.color}
                        </span>
                    </div>
                    <button onClick={this.changeColor}>Change color</button>
                    <div className="product-price">{price} $</div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => this.onDecrementClick()}
                            disabled = {this.state.disabled}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>

                    <div className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}
// const ProductListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: ProductListItemType) => {

// }

export default ProductListItem
