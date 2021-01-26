import React from 'react'

import { Card as AntCard } from 'antd'

const { Meta } = AntCard

interface CardProps {
  news: any
}

const Card = (props: CardProps) => {
  const { news } = props
  return (
    <AntCard
      hoverable
      style={{ width: '100%' }}
      cover={
        <img
          alt="example"
          src={news.urlToImage}
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </AntCard>
  )
}

export default Card
