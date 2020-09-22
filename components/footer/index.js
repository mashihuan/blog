import React, { memo } from 'react'
import Link from 'next/link'
import { MyFooterWrapper } from './style'

import { footerLinks } from '@/common/local-data'

export default memo(function MyFooter() {
  return (
    <MyFooterWrapper>
      <div className="inner">
        {
          footerLinks.map(item => {
            return (
              <Link href={item.path} key={item.name}>
                <a className="link">{item.name}</a>
              </Link>
            )
          })
        }
        <p className="copyright">Copyright © 2020 皖ICP备19024837号-1</p>
      </div>
    </MyFooterWrapper>
  )
})
