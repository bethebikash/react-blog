import {
  BehanceOutlined,
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import styled from '@emotion/styled'
import { Button, Col, Row } from 'antd'
import React from 'react'

const StyledHeading = styled('h3')`
  font-weight: bold;
  font-size: 20px;
`

const Logo = styled('span')`
  font-size: 22px;
  font-weight: bold;
`
const StyledUl = styled('ul')`
  padding: 0;
`

const StyledLi = styled('li')`
  font-weight: bold;
  list-style: none;
  padding: 3px 0;
  margin: 0;
`

const CopyRight = styled('p')`
  color: #8a8a8a;
  padding: 30px 0;
`

const StyledContactInfo = styled('p')`
  color: #8a8a8a;
  padding: 2px 0;
  margin: 0;
`

const FooterIcon = styled('div')`
  margin: 10px 0;
`

const CustomFooter = () => {
  return (
    <Row>
      <Col span={6}>
        <Logo>Sada.</Logo>
        <CopyRight>&copy; 2021 Alpha Beta Theta</CopyRight>
      </Col>
      <Col span={6}>
        <StyledHeading>About us</StyledHeading>
        <StyledUl>
          <StyledLi>Our Team</StyledLi>
          <StyledLi>Our Project</StyledLi>
          <StyledLi>Our Objectives</StyledLi>
          <StyledLi>The Link Four</StyledLi>
        </StyledUl>
      </Col>
      <Col span={6}>
        <StyledHeading>Product</StyledHeading>
        <StyledLi>Here we go</StyledLi>
        <StyledLi>Let's do it</StyledLi>
        <StyledLi>Alpha rocks</StyledLi>
        <StyledLi>The reamining</StyledLi>
      </Col>
      <Col span={6}>
        <StyledHeading>Contact us</StyledHeading>
        <StyledContactInfo>
          Hello@alStyledContactInfohaventus.com
        </StyledContactInfo>
        <StyledContactInfo>+ 977 01-4400000</StyledContactInfo>
        <FooterIcon>
          <Button type="text" icon={<FacebookFilled />} />
          <Button type="text" icon={<InstagramOutlined />} />
          <Button type="text" icon={<BehanceOutlined />} />
          <Button type="text" icon={<TwitterOutlined />} />
        </FooterIcon>
      </Col>
    </Row>
  )
}

export default CustomFooter
