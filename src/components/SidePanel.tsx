import React, {useEffect, useState} from 'react'
import {getProductFilters } from '../data/api'
import { Form,Accordion,Menu,AccordionTitleProps } from 'semantic-ui-react'
import {selectionCallback} from '../pages/ProductsPage'

type Props = {
    optionChange: selectionCallback
  };

const SidePanel = ({optionChange}:Props) => {

    //const {state, dispatch} = useContext(AppContext)

    let filterState:ProductFilters = {
        gender: [],
        category:[],
        trends:[]
      };
    let optionsState:ProductsFilterOptions = {
        categories: []
    }

    let [filters, setFilters] = useState(filterState)
    let [filtersOptions, setFiltersOptions] = useState(optionsState)
    let [activeIdexes, setActiveIndexes] = useState([0])

    useEffect(() => {
        getProductFilters().then(({data}) => {
            console.log(data)
            setFilters(data.productsFilters)
        })
    }, []);

    useEffect(() => {
        console.log(filtersOptions)
        optionChange(filtersOptions.categories)
    }, [filtersOptions,optionChange]);

    const handlePanelClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, { index }:AccordionTitleProps) => {
        if (activeIdexes.includes(index as number)) 
            setActiveIndexes(activeIdexes.filter(ind => ind !== index))
        else 
            setActiveIndexes([...activeIdexes, (index as number)])
    }

    const handleOptionClick = (option:string) => {
        if (filtersOptions.categories.includes(option as string)) 
            setFiltersOptions({ categories: filtersOptions.categories.filter(opt => opt !== option)})
        else 
            setFiltersOptions({ categories: [...filtersOptions.categories, option]})
    }

    return (
    <Accordion as={Menu} vertical>
        <Menu.Item>
          <Accordion.Title
            active={activeIdexes.includes(0)}
            content='Gender'
            index={0}
            onClick={handlePanelClick}
          />
            <Accordion.Content active={activeIdexes.includes(0)}>
                <Form>
                    <Form.Group grouped>
                        {filters && filters.gender && filters.gender.map((filter) => {
                            return (
                                <Form.Checkbox key={filter} label={filter} name='gender' value={filter} onChange={() => handleOptionClick(filter)}/>
                            )
                        })}
                    </Form.Group>
                </Form>
            </Accordion.Content>
        </Menu.Item>

        <Menu.Item>
          <Accordion.Title
            active={activeIdexes.includes(1)}
            content='Category'
            index={1}
            onClick={handlePanelClick}
          />
          <Accordion.Content active={activeIdexes.includes(1)}>
            <Form>
                <Form.Group grouped>
                    {filters && filters.gender && filters.category.map((filter) => {
                        return (
                            <Form.Checkbox label={filter} key={filter} name='category' value={filter} onChange={() => handleOptionClick(filter)}/>
                        )
                    })}
                </Form.Group>
            </Form>
          </Accordion.Content>
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            active={activeIdexes.includes(2)}
            content='Trends'
            index={2}
            onClick={handlePanelClick}
          />
          <Accordion.Content active={activeIdexes.includes(2)}>
            <Form>
                <Form.Group grouped>
                    {filters && filters.gender && filters.trends.map((filter) => {
                        return (
                            <Form.Checkbox label={filter} key={filter} name='trend' value={filter} onChange={() => handleOptionClick(filter)}/>
                        )
                    })}
                </Form.Group>
            </Form>
          </Accordion.Content>
        </Menu.Item>
      </Accordion>
    )
}


export default SidePanel
