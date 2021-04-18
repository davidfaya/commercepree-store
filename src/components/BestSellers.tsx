import React, { FunctionComponent }  from 'react'
import { Card, Image } from 'semantic-ui-react' 
import  ProductCard  from './ProductCard'


const BestSellers :FunctionComponent = () => {
    return (
        <Card.Group centered>
            <ProductCard 
                url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Violet.png"
                name="Some Product"/>
        </Card.Group>
    )
}

export default BestSellers
