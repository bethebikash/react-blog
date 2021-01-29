import React from 'react'
import styled from '@emotion/styled'
import { Col, Row } from 'antd'
import MainContent from './MainContent'
import SideContent from './SideContent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Business from '../pages/newsCategory/Business'
import Health from '../pages/newsCategory/Health'
import Science from '../pages/newsCategory/Science'
import Sports from '../pages/newsCategory/Sports'
import Technology from '../pages/newsCategory/Technology'

const StyledDev = styled('div')`
  padding: 1rem 3rem;
`

const ContentArea = () => {
  return (
    <Router>
      <StyledDev>
        <Row className="gutter-row" gutter={16}>
          <Col span={8}>
            <SideContent />
          </Col>
          <Col span={16}>
            <Switch>
              <Route exact path="/">
                <MainContent />
              </Route>
              <Route path="/business">
                <Business />
              </Route>
              <Route path="/health">
                <Health />
              </Route>
              <Route path="/science">
                <Science />
              </Route>
              <Route path="/technology">
                <Technology />
              </Route>
              <Route path="/sports">
                <Sports />
              </Route>
            </Switch>
          </Col>
        </Row>
      </StyledDev>
    </Router>
  )
}

export default ContentArea
