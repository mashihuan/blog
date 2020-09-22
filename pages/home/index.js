import React, { memo, useState, useEffect } from 'react'

import HomeLayout from '@/layouts/home'
import ArticleItem from '@/components/article-item'

const Home =  memo((props) => {
  // state and props
  const { articles = [] } = props

  return (
    <HomeLayout>
      {
        articles.map(item => {
          return (
            <ArticleItem key={item.id} article={item}/>
          )
        })
      }
    </HomeLayout>
  )
})

export default Home
