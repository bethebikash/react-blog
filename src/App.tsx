import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Layout as MainLayout, Pagination } from 'antd'
import MainHeader from './components/MainHeader'
import SubHeader from './components/SubHeader'
import styled from '@emotion/styled'
import ContentArea from './layout/ContentArea'
import CustomFooter from './components/CustomFooter'

const { Header, Footer, Content } = MainLayout

const HeaderStyle = styled(Header)`
  background-color: rgba(255, 255, 255, 0.04);
`

const SubHeaderStyle = styled(Header)`
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledFooter = styled(Footer)`
  background-color: #fff;
`

const StyledPagination = styled('div')`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;
  padding-bottom: 3rem;
  .ant-pagination-item-active{
    border: none;
  }
  .ant-pagination-item-active a{
    background-color: #031140;
    color: #fff;
  }
  .
`

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HeaderStyle>
          <MainHeader />
        </HeaderStyle>
        <SubHeaderStyle>
          <SubHeader />
        </SubHeaderStyle>
        <Content>
          <ContentArea />
        </Content>
        <StyledPagination>
          <Pagination defaultCurrent={1} total={50} />
        </StyledPagination>
        <StyledFooter>
          <CustomFooter />
        </StyledFooter>
      </MainLayout>
    </div>
  )
}

export default App
