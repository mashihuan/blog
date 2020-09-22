import React, { memo, useState, useEffect } from 'react'
import Link from 'next/link'

import { hot } from '@/api/article'

import { SidebarHotArticleWrapper } from './style'

export default memo(function SidebarHotArticle() {
  // state and props
  const [hots, setHots] = useState([])

  // hooks
  useEffect(() => {
    getHots()
  }, [])

  // handle
  const getHots = async () => {
    const res = await hot({
      page: 1,
      count: 5
    })
    setHots(res.data.articles || [])
  }

  return (
    <SidebarHotArticleWrapper>
      <h4 className="title">推荐</h4>
      <ul className="articles">
        {
          hots.map(item => {
            return (
              <li className="article-item ellipsis" key={item.id}>
                <Link href={'/article/' + item.id}><a>{item.title}</a></Link>
              </li>
            )
          })
        }
      </ul>
    </SidebarHotArticleWrapper>
  )
})
