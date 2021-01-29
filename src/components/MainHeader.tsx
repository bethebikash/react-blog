import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const PageHeader = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Menu = Styled.ul`
  display:flex;
  font-size: 16px;
  font-weight: bold;
  margin: 0
`

const MenuItem = Styled.li`
  list-style: none;
  padding: 0 10px;
  &:last-child{
    padding: 0;
  }
`

const Logo = Styled.span`
  font-size: 22px;
  font-weight: bold;
`

const MainHeader = () => {
  return (
    <PageHeader>
      <Logo>Sada.</Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Page</MenuItem>
        <MenuItem>Protfolio</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Elements</MenuItem>
      </Menu>
    </PageHeader>
  )
}

export default MainHeader
