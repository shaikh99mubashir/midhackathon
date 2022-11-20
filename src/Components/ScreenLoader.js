import React from 'react'

const ScreenLoader = (props) => {
  const {src} = props
    return (
    <div>
      <img src={src} alt="loading..." />
    </div>
  )
}

export default ScreenLoader
