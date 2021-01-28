import styled from '@emotion/styled'
import { PageHeader } from 'antd'
import React from 'react'

const StyledPageHeader = styled(PageHeader)`
  text-transform: uppercase;
  padding: 12px 0;
`

const routes = [
  {
    path: 'home',
    breadcrumbName: 'Home',
  },
  {
    path: 'blog',
    breadcrumbName: 'Bolg',
  },
  {
    path: 'left-sidebar',
    breadcrumbName: 'Left Sidebar',
  },
]

const PageLink = () => {
  return <StyledPageHeader breadcrumb={{ routes }} />
}

export default PageLink
