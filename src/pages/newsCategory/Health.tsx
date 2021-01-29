import { Col, Row } from 'antd'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from '../../components/NewsCard'

const Health = () => {
  const [response, setResponse] = useState<any>(null)

  const getAllPost = async () => {
    try {
      const res = await axios.get(
        `http://newsapi.org/v2/top-headlines?q=design&sortBy=publishedAt&apiKey=1ceac4451e4e40aab1e0cbf265ad130e&pageSize=6&category=health`
      )
      setResponse(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPost()
  }, [])

  return (
    <Row gutter={[16, 16]}>
      {response &&
        response.data.articles.map((resp: any, index: number) => (
          <Col key={index} span={12}>
            <NewsCard news={resp} />
          </Col>
        ))}
    </Row>
  )
}

export default Health
