import React from 'react'
import styled from 'styled-components'
import { Product } from './Product'
import {popularProducts} from '../Assets/data'
const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
`

function Products() {
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item}  key={item.id} />
        ))}
    </Container>
  )
}

export default Products