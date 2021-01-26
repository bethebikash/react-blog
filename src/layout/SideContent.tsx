import { Col, Row } from 'antd'
import React from 'react'
import SearchBar from '../components/SearchBar'

const SideContent = () => {
  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <SearchBar />
      </Col>
      <Col span={24}>
        category list
      </Col>
      <Col span={24}>
        top posts
      </Col>
    </Row>
  )
}

export default SideContent
