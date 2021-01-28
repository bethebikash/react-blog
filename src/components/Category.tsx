import styled from '@emotion/styled'
import { Card } from 'antd'
import React from 'react'

const StyledCard = styled(Card)`
  background-color: #fafafa;
  margin-top: 25px;
`

const StyleHeader = styled('h3')`
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 20px;
`

const StyledPa = styled('p')`
  font-weight: bold;
  &:not(:last-child) {
    border-bottom: 1.5px solid lightgray;
    margin: 10px 0;
    padding-bottom: 10px;
  }
`

const Category = () => {
  return (
    <StyledCard bordered={false}>
      <StyleHeader>Categories</StyleHeader>
      <StyledPa>Business</StyledPa>
      <StyledPa>Health</StyledPa>
      <StyledPa>Science</StyledPa>
      <StyledPa>Sports</StyledPa>
      <StyledPa>Technology</StyledPa>
    </StyledCard>
  )
}

export default Category
