import React, { Suspense } from 'react'
import { Box, Spinner } from '@chakra-ui/core'

import NavContent from './NavContent'

const SideNav = () => {
  return (
    <Box
      position="fixed"
      height="100%"
      zIndex={1}
      top={0}
      left={0}
      overflowX="hidden"
      display={["none", null, "block"]}
    >
      <Suspense fallback={<Spinner />}>
        <NavContent/>
      </Suspense>
    </Box>
  )
}

export default SideNav
