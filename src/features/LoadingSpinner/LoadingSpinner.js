import React from 'react'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

function LoadingSpinner() {
  const theme = useContext(ThemeContext)
  const color = theme.text
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ClipLoader color={color} />
    </div>
  )
}

export default LoadingSpinner
