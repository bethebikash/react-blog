import styled from '@emotion/styled'
import { Card, Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StyledCard = styled(Card)`
  background-color: #fafafa;
  margin-top: 30px;
`

const StyleHeader = styled('h3')`
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 20px;
`

const SubTitle = styled('div')`
  text-transform: uppercase;
  color: #808080;
`

const StyledNews = styled('div')`
  font-weight: bold;
`

const StyledNum = styled('span')`
  font-size: 42px;
  font-weight: bold;
  padding-right: 20px;
`

const TopPost = () => {
  const [response, setResponse] = useState<any>(null)

  const getResponse = async () => {
    try {
      const res = await axios.get(
        `http://newsapi.org/v2/top-headlines?q=any&sortBy=publishedAt&apiKey=1ceac4451e4e40aab1e0cbf265ad130e&pageSize=6`
      )
      setResponse(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResponse()
  }, [])

  return (
    <StyledCard bordered={false}>
      <StyleHeader>Top Posts</StyleHeader>
      {response &&
        response.data.articles.map((resp: any, index: number) => (
          <Row key={index} gutter={[0, 16]} wrap={false}>
            <Col flex="none">
              <StyledNum>{index + 1}</StyledNum>
            </Col>
            <Col flex="auto">
              <StyledNews>{resp.title}</StyledNews>
              <SubTitle>
                <span>{resp.source.name} </span>
                <span>{'-'} date</span>
              </SubTitle>
            </Col>
          </Row>
        ))}
    </StyledCard>
  )
}

export default TopPost
