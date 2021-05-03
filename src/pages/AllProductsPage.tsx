import React, {useContext,useState, useEffect} from "react";
import { AppContext } from "../context/appContext";
import ProductCard from '../components/ProductCard'
import SidePanel from '../components/SidePanel'
import {
  Card,
  Container,
  Checkbox,
  Grid,
  Header,
  Icon,
  Button,
  Segment,
  Sidebar,
  Pagination,
  PaginationProps,
} from 'semantic-ui-react'
import { getProductOptions } from '../data/api'
import {UpdateProducts} from '../types/action'

var _ = require('lodash/core');

const AllProductsPage = () => {
  
  const {state, dispatch} = useContext(AppContext)
  const [sideBarVisible, setSideBarVisible] = useState(false)
  const [pageState, setPageState] = useState(1)
  const [numPages, setNumPages] = useState(5)

  useEffect(() => {
    console.log(state)
    getProductOptions({ page: pageState, 
                        size: state.productFilters.size,
                        categories:state.productFilters.categories}).then(({data}) => {
        console.log(data)
        setNumPages(data.totalPages)
        dispatch(UpdateProducts(data.products))
      })
  }, [pageState]);

  const handlePaginationChange = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    {activePage}: PaginationProps) => {
      const newPage:number = activePage as number;
      setPageState(newPage)
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
            <SidePanel/>
          </Sidebar>

          <Sidebar.Pusher>
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
                {state.products.map(({title, variants, id})=> {
                  return (
                  <ProductCard 
                        key={id}
                        url={variants[0].image}
                        name={title}/>
                    )
                })}
              </Card.Group>
            </Segment>
            <Segment>
            <Pagination
              activePage={pageState}
              onPageChange={handlePaginationChange}
              totalPages={state.productFilters.numPages as number}
            />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
    
  );
};

export default AllProductsPage;
