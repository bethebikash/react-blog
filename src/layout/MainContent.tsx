import { Col, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const MainContent = () => {
  const [response, setResponse] = useState<any>(null)

  const getResponse = async () => {
    try {
      const res = await axios.get(
        `http://newsapi.org/v2/everything?q=tesla&from=2020-12-26&sortBy=publishedAt&apiKey=1ceac4451e4e40aab1e0cbf265ad130e`
      )
      setResponse(res)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResponse()
  }, [])

  return (
    <Row gutter={16}>
      {response &&
        response.data.articles.map((resp: any) => (
          <Col className="gutter-row" span={12}>
            <Card news={resp} />
          </Col>
        ))}
    </Row>
  )
}

export default MainContent
