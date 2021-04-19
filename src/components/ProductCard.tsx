import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const ProductCard:React.FC<ProductCardProps> = ({ name, url }) => {
    return (
        <Card>
             <Image centered size="small" raise="true" src={url} />
                <Card.Content >
                <Card.Header>{name}l</Card.Header>
                
                <Card.Description>
                    Desc
                </Card.Description>
                </Card.Content>
            
        </Card>
    )
}

export default ProductCard
