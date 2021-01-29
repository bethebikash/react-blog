import styled from '@emotion/styled'
import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledCard = styled(Card)`
  background-color: #fafafa;
  margin-top: 25px;
  a {
    style: none;
    color: inherit;
  }
`

const StyleHeader = styled('h3')`
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 20px;
`

const StyledLi = styled(Link)`
  font-weight: bold;
  display: block;
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
      <StyledLi to="/business">Business</StyledLi>
      <StyledLi to="/health">Health</StyledLi>
      <StyledLi to="/science">Science</StyledLi>
      <StyledLi to="/technology">Technology</StyledLi>
      <StyledLi to="/sports">Sports</StyledLi>
      {/* <Link to="/health">
          <StyledLi>Health</StyledLi>
        </Link> */}
      {/* <StyledLi>Science</StyledLi>
        <StyledLi>Sports</StyledLi>
        <StyledLi>Technology</StyledLi> */}
    </StyledCard>
  )
}

export default Category
