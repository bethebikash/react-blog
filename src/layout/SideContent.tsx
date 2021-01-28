import { Col, Row } from 'antd'
import React from 'react'
import Category from '../components/Category'
import Gallery from '../components/Gallery'
import SearchBar from '../components/SearchBar'
import TopPost from '../components/TopPost'

const SideContent = () => {
  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <SearchBar />
      </Col>
      <Col span={24}>
        <Category />
      </Col>
      <Col span={24}>
        <TopPost />
      </Col>
      <Col span={24}>
        <Gallery />
      </Col>
    </Row>
  )
}

export default SideContent
