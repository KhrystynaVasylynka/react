import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="product-title">iPhone 15 Pro</h2>
                <p className="product-description">This is iPhone 15 Pro</p>
                <div className="product-features">Type: phone</div>
                <div className="product-features">Capacity: 128Gb</div>
                <div className="product-price">1000 $</div>

                <div className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
