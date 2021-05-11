import React, { useContext, useEffect, useCallback,useState } from  'react'
import { Card, Segment, Header, Icon } from 'semantic-ui-react' 
import  ProductCard  from './ProductCard'
import { AppContext } from "../context/appContext";


const BestSellers : React.FC = () => {

    const {state} = useContext(AppContext)

    return (
        <div>
        <Segment basic>
            <Header as='h2' icon
                textAlign='center'
                style={{marginBottom:'1em'}} >
                <Icon name='star outline' circular centered/>
                <Header.Content centered>Best Sellers</Header.Content>
            </Header>
            
            <Card.Group centered>
                {state.featuredProducts.map((prod)=> {
                    return (
                    <ProductCard 
                            key={prod.id}
                            product={prod}/>
                    )
                })}
            </Card.Group>
        </Segment>
        </div>
    )
}

export default BestSellers
