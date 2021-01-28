import React from 'react'
import styled from '@emotion/styled'
import { Col, Row } from 'antd'
import MainContent from './MainContent'
import SideContent from './SideContent'

const StyledDev = styled('div')`
  padding: 1rem 3rem;
`

const ContentArea = () => {
  return (
    <StyledDev>
      <Row className="gutter-row" gutter={16}>
        <Col span={8}>
          <SideContent />
        </Col>
        <Col span={16}>
          <MainContent />
        </Col>
      </Row>
    </StyledDev>
  )
}

export default ContentArea
