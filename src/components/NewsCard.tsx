import React from 'react'

import { Card as AntCard } from 'antd'
import styled from '@emotion/styled'

const { Meta } = AntCard

const PreTitle = styled('div')`
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #808080;
`

type CardProps = {
  news: any
}

const StyledMeta = styled(Meta)`
  .ant-card-meta-title {
    white-space: normal;
    text-overflow: inherit;
  }
`

const NewsCard: React.FC<CardProps> = ({ news }) => {
  return (
    <AntCard
      hoverable
      style={{ width: '100%' }}
      cover={<img alt="example" src={news.urlToImage} />}
    >
      <PreTitle>
        <span>{news.source.name} </span>
        <span>{'-'} date</span>
      </PreTitle>
      <StyledMeta title={news.title} description={news.description} />
    </AntCard>
  )
}

export default NewsCard
