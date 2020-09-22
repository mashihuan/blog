import React, { memo } from 'react'

import { list } from '@/api/article'

import Home from './home'

const Index = memo((props) => {
  return <Home articles={props.articles}/>
})

Index.getInitialProps = async (props) => {
  const res = await list({
    page: 1,
    count: 7
  })
  return {
    articles: res.data.articles || []
  }
}

export default Index

