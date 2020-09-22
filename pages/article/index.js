import React, { memo, useState, useEffect, useCallback } from 'react'
import { withRouter } from 'next/router'

import { list } from '@/api/article'

import { Breadcrumb, Pagination } from 'antd'
import CommonLayout from '@/layouts/common'
import ArticleItem from '@/components/article-item'

const Article = memo((props) => {
  // state and props
  const { total } = props
  const [articles, setArticles] = useState([])

  // hooks
  useEffect(() => {
    setArticles(props.articles)
  }, [])

  // handle
  const onChangePage = useCallback((page) => {
    getArticles(page)
  })

  const getArticles = async (page) => {
    const res = await list({
      page,
      count: 10
    })
    setArticles(res.data.articles)
  }

  return (
    <CommonLayout>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>{router.query.tag ? router.query.tag : '文章'}</Breadcrumb.Item>
      </Breadcrumb> */}
      {
        articles.map(item => {
          return (
            <ArticleItem key={item.id} article={item}/>
          )
        })
      }
      <Pagination
        hideOnSinglePage
        showSizeChanger={false}
        total={total}
        defaultPageSize={10}
        defaultCurrent={1}
        onChange={page => onChangePage(page)}
      />
    </CommonLayout>
  )
})

Article.getInitialProps = async () => {
  const res = await list({
    page: 1,
    count: 10
  })
  return {
    articles: res.data.articles,
    total: res.data.total
  }
}

export default withRouter(Article)
