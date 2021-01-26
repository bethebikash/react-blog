import styled from '@emotion/styled'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import React from 'react'

const StyledSearch = styled('div')`
  display: flex;
`

const StyledInput = styled('input')`
  outline: none;
  border: none;
  border-radius: 20px 0 0 20px;
  padding: 0 20px;
  -webkit-box-shadow: 0px 13px 13px -9px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 13px 13px -9px rgba(0, 0, 0, 0.26);
`

const StyledButton = styled(Button)`
  outline: none;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 0 10px;
  -webkit-box-shadow: 0px 13px 13px -9px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 13px 13px -9px rgba(0, 0, 0, 0.26);
`

const SearchBar = () => {
  return (
    <StyledSearch>
      <StyledInput placeholder="Search..." type="text" />
      <StyledButton icon={<SearchOutlined />}></StyledButton>
    </StyledSearch>
  )
}
export default SearchBar
