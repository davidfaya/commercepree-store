import React, { useState, MouseEvent } from 'react'
import { ROUTE } from '../types/route'
import { Link } from 'react-router-dom';
import { Menu, Icon, MenuItemProps } from 'semantic-ui-react'


const TopNav: React.FC = () => {

  interface MenuState { 
      activeItem:string | undefined 
  }

  const initialState:MenuState ={ activeItem : 'home'}

  const [state, setState] = useState(initialState)

    const handleItemClick = (e:MouseEvent<HTMLAnchorElement>, data:MenuItemProps) => setState({ activeItem: data.name })

    const { activeItem } = state
      return (
          <div>
              
          <Menu pointing secondary stackable
            style={{marginBottom:'1em'}}>
            <Menu.Item
              name='home'
              as={Link}
              to={ROUTE.HOME}
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='products'
              as={Link}
              to={ROUTE.ALL_PRODUCTS}
              active={activeItem === 'products'}
              onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='cart'
                active={activeItem === 'cart'}
                onClick={handleItemClick}
              ><Icon name="shopping cart" /></Menu.Item>
            </Menu.Menu>
          </Menu>
          </div>
      )
}

export default TopNav 
