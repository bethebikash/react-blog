import React from 'react'
import styled from '@emotion/styled'
import { Col, Row } from 'antd'
import MainContent from './MainContent'
import SideContent from './SideContent'

const StyledRow = styled(Row)`
  padding: 2rem 3rem;
`

const ContentArea = () => {
  return (
    <StyledRow gutter={[16, 16]}>
      <Col span={8}>
        <SideContent />
      </Col>
      <Col span={16}>
        <MainContent />
      </Col>
    </StyledRow>
  )
}

export default ContentArea
