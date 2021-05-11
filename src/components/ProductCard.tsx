import React from 'react'
import { Card, Image, CardProps } from 'semantic-ui-react'

interface ProductCardProps {
    product: ProductModel
    clickHandler?: (selectedProd:ProductModel) => void
  }


const ProductCard:React.FC<ProductCardProps> = ({ product, clickHandler }) => {

    const prod: ProductModel = product;

    const handleProductCardClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: CardProps) => {
        clickHandler && clickHandler(prod)
    }

    return (
        <Card onClick={handleProductCardClick}>
             <Image centered style={{height:'200px', margin:"auto"}} raise="true" src={prod.variants[0].image} />
            <Card.Content >
                <Card.Header>{prod.title}l</Card.Header>
                <Card.Description>
                    Desc
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ProductCard
