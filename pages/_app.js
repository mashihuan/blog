import Head from 'next/head'
import store from '@/store'
import { Provider } from 'react-redux'

import 'normalize.css'
import 'antd/dist/antd.css'
import '@/assets/css/globals.css'
import '@/assets/iconfont/iconfont.css'

import MyHeader from '@/components/header'
import MyFooter from '@/components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>马世环的博客</title>
        <link rel="icon" href="/static/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta name="description" content="马世环de博客、一个个人网站、IT技术分享、记录IT生活、提供技术分享和作品分享的个人原创网站"/>
        <meta name="keywords" content="马世环、博客、个人博客、个人网站、前端"/>
      </Head>

      <MyHeader/>
      <Component {...pageProps} />
      <MyFooter/>
    </Provider>
  )
}

export default MyApp
