import React from 'react'
import styled from '@emotion/styled'

const PageHeader = styled.div`
  heigt: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Title = styled('div')`
  font-size: 16px;
  font-weight: bold;
`

const SubHeader = () => {
  return (
    <PageHeader>
      <Title>Logo</Title>
      <div>HOME / BLOG / LEFT SIDEBAR</div>
    </PageHeader>
  )
}

export default SubHeader
