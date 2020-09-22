import React, { memo } from 'react'

import { MyBannerWrapper } from './style'
import ReactJs from './react'
import NextJs from './next'
import VueJs from './vue'

export default memo(function MyBanner() {
  return (
    <MyBannerWrapper className="banner-wrap">
      <ReactJs/>
      <NextJs/>
      <VueJs/>
    </MyBannerWrapper>
  )
})
