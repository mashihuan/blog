import React, { memo, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import { MyHeaderWrapper } from './style'

import { headerMenus } from '@/common/local-data'

const MyHeader =  memo((props) => {
  // state and props
  const [current, setCurrent] = useState()
  const [showMenu, setShowMenu] = useState()
  const menuRef = useRef()

  // hooks
  useEffect(() => {
    // 设置导航高亮
    let pathname = props.router.pathname
    pathname = pathname.includes('article') ? '/article' : pathname
    setCurrent(pathname)
    // 取消滚动穿透
    menuRef.current && menuRef.current.addEventListener('touchmove', handleTouchmove, {passive: false})
    // 路由拦截
    Router.events.on('routeChangeStart', handleRouteChange)
    // 取消全局事件
    return () => {
      menuRef.current && menuRef.current.removeEventListener('touchmove', handleTouchmove)
      Router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [Router, props.router])

  // handle
  const handleTouchmove = (event) => {
    event.preventDefault()
  }
  const handleHamburgClick = () => {
    setShowMenu(!showMenu)
  }
  const handleRouteChange = url => {
    setShowMenu(false)
  }

  return (
    <MyHeaderWrapper id="header">
      <div className="wrap">
        <div className="top"></div>
        <div className="nav">
          <div className="content">
            <h1 className="logo">
              <Link href="/">
                <a><img src="/static/img/logo.png" alt="logo" /></a>
              </Link>
            </h1>
            <ul className="menu" ref={menuRef}
                style={{display: showMenu ? 'flex' : 'none'}}>
              {
                headerMenus.map((item,index) => {
                  return (
                    <li key={item.name} className="menu-item">
                      <Link key={item.name} href={item.path}>
                        <a className={"menu-link" + (current === item.path ? ' active' : '') + ((index === 1 || index === 2) ? ' color' : '')}>
                          {item.name}
                        </a>
                      </Link>
                      {index === 3 && <i className="iconfont">&#xe624;</i>}
                      {
                        item.children && (
                          <ul className="sub-menu">
                            {
                              item.children.map(iten => {
                                return (
                                  <li key={iten.name} className="sub-menu-item">
                                    <Link href={iten.path}>
                                      <a className="sub-menu-link">{iten.name}</a>
                                    </Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        )
                      }
                    </li>
                  )
                })
              }
            </ul>
            <div className="hamburg" onClick={e => handleHamburgClick()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </MyHeaderWrapper>
  )
})

export default withRouter(MyHeader)
