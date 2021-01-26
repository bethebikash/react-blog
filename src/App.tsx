import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Layout as MainLayout } from 'antd'
import MainHeader from './components/MainHeader'
import SubHeader from './components/SubHeader'
import styled from '@emotion/styled'
import ContentArea from './layout/ContentArea'

const { Header, Footer, Content } = MainLayout

const HeaderStyle = styled(Header)`
  background-color: #ebebeb;
`

const SubHeaderStyle = styled(Header)`
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
        <Footer>Footer</Footer>
      </MainLayout>
    </div>
  )
}

export default App
