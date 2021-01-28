import React from 'react'
import styled from '@emotion/styled'
import PageLink from './PageLink'

const PageHeader = styled.div`
  heigt: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Title = styled('div')`
  font-size: 22px;
  font-weight: bold;
`

const SubHeader = () => {
  return (
    <PageHeader>
      <Title>Blog</Title>
      <PageLink />
    </PageHeader>
  )
}

export default SubHeader
