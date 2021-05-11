import React, {useContext,useState, useEffect, useCallback, useRef} from "react";
import { AppContext } from "../context/appContext";
import ProductCard from '../components/ProductCard'
import SidePanel from '../components/SidePanel'
import ProductModal from '../components/ProductModal'
import {
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Button,
  Segment,
  Sidebar,
  Pagination,
  PaginationProps,
  CardProps
} from 'semantic-ui-react'
import { getFilteredProducs } from '../data/api'
import {UpdateProducts} from '../types/action'

//var _ = require('lodash/core');

export type selectionCallback = (selectedOptions: string[]) => void;
export type closeModalCallback = () => void;

const ProductsPage = () => {
  const optionsState:string[] = []
  
  const {state, dispatch} = useContext(AppContext)
  const [sideBarVisible, setSideBarVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState( optionsState )
  const totPages = useRef(5)
  const selectedProduct = useRef<ProductModel>()
  

  
  const updateProductList = () => {
    getFilteredProducs({  page: pageNumber, 
                          size: state.productFilters.size,
                          categories: selectedOptions}).then(({data}) => {
        console.log(data)
        totPages.current = data.totalPages 
        dispatch(UpdateProducts(data.products))
    })
  }
  const updateCallback = useCallback(updateProductList,[dispatch, pageNumber, state.productFilters.size, selectedOptions])

  useEffect(() => {
    updateCallback()
  }, [updateCallback, pageNumber, selectedOptions]);

  const handlePaginationChange = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    {activePage}: PaginationProps) => {
      debugger;
      const newPage:number = activePage as number;
      setPageNumber( newPage )
    }
  
  
  const handleOptionChange:selectionCallback = (options:string[]) => {
    setSelectedOptions(options)
  }

  const closeProductModal:closeModalCallback = () => { 
    setModalOpen(false)
  }
  const handleProductClick = (product:ProductModel) => {
    console.log("CLICK - " , product)
    selectedProduct.current = product
    setModalOpen(true)
  }
  
  return (
    <Grid columns={1}>
      
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Container}
            animation='push'
            icon='labeled'
            onHide={() => setSideBarVisible(false)}
            visible={sideBarVisible}
            width='thin'
          >
            <SidePanel optionChange={handleOptionChange}/>
          </Sidebar>
           
          <Sidebar.Pusher>
          {selectedProduct.current &&
            <ProductModal 
              modalOpen={modalOpen}
              product={selectedProduct.current}
              handleClose={closeProductModal}
              onClose={()=>{setModalOpen(false)}} /> }

            <Segment basic>
              <Button basic onClick={() => setSideBarVisible(!sideBarVisible)}>
                {!sideBarVisible && <Icon disabled name='angle double right' />}
                {sideBarVisible && <Icon disabled name='angle double left' />}
              </Button>
              <Header as='h2' icon
                textAlign='center'
                style={{marginBottom:'1em'}} >
                <Icon name='shopping bag' circular/>
                <Header.Content>Browse Products</Header.Content>
              </Header>
              <Card.Group centered>
                {state.products.map((prod)=> {
                  return (
                  <ProductCard 
                        key={prod.id}
                        product={prod}
                        clickHandler={handleProductClick}/>
                    )
                })}
              </Card.Group>
            </Segment>
            <Segment>
            <Pagination
              activePage={pageNumber}
              onPageChange={handlePaginationChange}
              totalPages={totPages.current}
            />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
    
  );
};

export default ProductsPage;
