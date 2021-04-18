import React, {useContext} from "react";
import { AppContext } from "../context/appContext";
import { Container,Grid, Image } from 'semantic-ui-react'

const AllProductsPage = () => {

  const {state} = useContext(AppContext)

  return (
    <Container>
      {state.products.map(prod => <div key={prod.id}>{prod.title}</div>)}
    </Container>
  );
};

export default AllProductsPage;
