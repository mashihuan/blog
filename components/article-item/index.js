import React, { memo } from 'react'
import Link from 'next/link'

import { ArticleItemWrapper } from './style'

export default memo(function ArticleItem(props) {
  // state and props
  const { article } = props

  // handle
  const getCurrentDate = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const myDay = new Date().getDate()
    return year + '-' + month + '-' + myDay
  }

  return (
    <ArticleItemWrapper>
      <h4 className="title ellipsis">{article.title}</h4>
      <div className="tags">
        <span className="time">
          {article.created_at ? article.created_at.split('T')[0] : getCurrentDate()}
        </span>
        <span className="divider">|</span>
        <span className="type">文章</span>
        <span className="divider">|</span>
        <span>{article.read_num}阅读</span>
      </div>
      <p className="content ellipsis-2">{article.desc}</p>
      <p className="more">
        <Link href={"/article/" + article.id}><a>-&nbsp;查看全文&nbsp;-</a></Link>
      </p>
    </ArticleItemWrapper>
  )
})
