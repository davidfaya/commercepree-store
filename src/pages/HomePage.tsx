import React from "react";
import { Container,Grid, Image } from 'semantic-ui-react'
import BestSellers from "../components/BestSellers";
import ShopQuality from '../components/ShopQuality'



const HomePage = () => {
  return (
    <Container> 
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Image src='http://localhost:1234/public/coverimage.JPG' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <ShopQuality/>
          </Grid.Column>
          
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <BestSellers/>
          </Grid.Column>
          
        </Grid.Row>
      </Grid>
      
    </Container>
  );
};

export default HomePage;
