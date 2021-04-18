import React, { FunctionComponent }  from 'react'
import { Card, Image } from 'semantic-ui-react'

const ShopQuality:FunctionComponent = () => {
    return (
        <Card.Group centered>
            <Card>
                <Image src='http://localhost:1234/public/support-local.JPG' />
                <Card.Content>
                <Card.Header>Support Local</Card.Header>
                
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                
            </Card>
            <Card>
                <Image src='http://localhost:1234/public/high-quality.JPG' />
                <Card.Content>
                <Card.Header>High Quality</Card.Header>
                
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                
            </Card>
            <Card>
                <Image src='http://localhost:1234/public/eco-friendly.JPG' />
                <Card.Content>
                <Card.Header centered>Eco Friendly</Card.Header>
                
                <Card.Description centered>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                
            </Card>

        </Card.Group>
    )
}

export default ShopQuality
