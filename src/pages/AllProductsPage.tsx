import React, {useContext,useState} from "react";
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
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const AllProductsPage = () => {

  const {state} = useContext(AppContext)
  const [sideBarVisible, setSideBarVisible] = useState(false)

  return (
    <Grid columns={1}>
      

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Container}
            animation='push'
            icon='labeled'
            inverted
            onHide={() => setSideBarVisible(false)}
            vertical
            visible={sideBarVisible}
            width='wide'
          >
            <SidePanel/>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>

              <Checkbox
                checked={sideBarVisible}
                label={{ children: <code>visible</code> }}
                onChange={(e, data) => setSideBarVisible(data.checked as boolean)}
              />
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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
    
  );
};

export default AllProductsPage;
