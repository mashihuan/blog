import React, { memo } from 'react'

import { detail } from '@/api/article'

import { Breadcrumb } from 'antd'
import CommonLayout from '@/layouts/common'
import { ArticleContentWrapper } from '@/style/article'

const ArticleDetail = memo((props) => {
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
    <CommonLayout>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>文章</Breadcrumb.Item>
        <Breadcrumb.Item>年中总结</Breadcrumb.Item>
      </Breadcrumb> */}
      <ArticleContentWrapper>
        <h3 className="title">{article.title}</h3>
        <div className="tags">
          <span className="time">
            {article.created_at ? article.created_at.split('T')[0] : getCurrentDate()}
          </span>
          <span className="divider">|</span>
          <span className="type">文章</span>
          <span className="divider">|</span>
          <span>{article.read_num}阅读</span>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html:article.content}}></div>
      </ArticleContentWrapper>
    </CommonLayout>
  )
})

ArticleDetail.getInitialProps = async ({query}) => {
  const res = await detail({
    id: query.id
  })
  return {
    article: res.data.article || {}
  }
}

export default ArticleDetail