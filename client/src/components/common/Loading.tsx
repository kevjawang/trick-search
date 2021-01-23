import React, { useState, useEffect, useContext } from 'react'
import { Spinner, Box } from '@chakra-ui/core'

const Loading = () => {
  return (
    <Box>
      <Spinner />
    </Box>
  )
}

export default Loading
