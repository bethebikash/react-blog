import styled from '@emotion/styled'
import { Col, Image, Row } from 'antd'
import React from 'react'

const StyledImage = styled(Image)`
  overflow: hidden;
  border-radius: 4px;
`

const StyledTitle = styled('h3')`
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
`
const Gallery = () => {
  return (
    <>
      <StyledTitle>Instagram</StyledTitle>
      <Row gutter={[4, 4]}>
        <Col span={8}>
          <StyledImage
            src={
              'https://image.freepik.com/free-photo/fictitious-floating-island_1048-2899.jpg'
            }
          />
        </Col>
        <Col span={8}>
          <StyledImage src="https://image.freepik.com/free-vector/spring-landscape-background_23-2147751781.jpg" />
        </Col>
        <Col span={8}>
          <StyledImage src="https://image.freepik.com/free-vector/explorer-with-backpack_23-2148179716.jpg" />
        </Col>
      </Row>
      <Row gutter={[4, 4]}>
        <Col span={8}>
          <StyledImage src="https://image.freepik.com/free-photo/amazing-beaches-greek-islands_287743-397.jpg" />
        </Col>
        <Col span={8}>
          <StyledImage src="https://image.freepik.com/free-vector/evening-fog-tops-trees-pine-forest_1284-27059.jpg" />
        </Col>
        <Col span={8}>
          <StyledImage src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Col>
      </Row>
    </>
  )
}

export default Gallery
