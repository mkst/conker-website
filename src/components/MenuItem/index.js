import React from 'react'

import './MenuItem.scss'

export const MenuItem = ({item, active, onClick}) => {

  const activeClass = active ? 'active' : ''

  return (
    <div
      className={"menu-item " + activeClass}
      onClick={onClick}>
      {item}
    </div>
  )
}
