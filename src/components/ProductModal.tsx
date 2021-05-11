import React, {ReactNode} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {closeModalCallback} from '../pages/ProductsPage'
import PropTypes from 'prop-types'

type Props = {
    modalOpen: boolean,
    handleClose: closeModalCallback,
    onClose: () => void,
    product: ProductModel
  };



const ProductModal = ({product, handleClose, modalOpen, onClose}: Props) => {
    console.log(product)

    return (
        <>
            <Modal 
                open={modalOpen} 
                closeOnEscape={true} 
                onClose={onClose}
                closeIcon>
                <Modal.Header>{product.title}</Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src={product.variants[0].image} wrapped />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                            address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button content="Add To Cart" color='twitter' onClick={handleClose} icon="shopping cart" labelPosition='right'/>
                    <Button content="Close" color='twitter' onClick={handleClose}/>
                </Modal.Actions>
            </Modal>
        
        </>
    )
}

export default ProductModal
