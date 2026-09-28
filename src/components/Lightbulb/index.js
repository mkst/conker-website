import React from 'react'

import './Lightbulb.scss'

// Conker's context-sensitive lightbulb: pops up when there's something to do
export const Lightbulb = () => {
  return (
    <span className="lightbulb" aria-hidden="true">
      <svg viewBox="0 0 48 64" width="40" height="54">
        <g className="lightbulb-rays" stroke="#2b1606" strokeWidth="3" strokeLinecap="round">
          <line x1="24" y1="2" x2="24" y2="-4" />
          <line x1="6" y1="10" x2="1" y2="5" />
          <line x1="42" y1="10" x2="47" y2="5" />
        </g>
        <path
          d="M24 8c-9.4 0-16 7-16 15.4 0 6 3.2 9.6 6 12.6 2 2.2 3 4 3 7h14c0-3 1-4.8 3-7 2.8-3 6-6.6 6-12.6C40 15 33.4 8 24 8z"
          fill="#fff27a" stroke="#2b1606" strokeWidth="3" />
        <path d="M15 22c0-4 3-8 8-8.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <rect x="16" y="43" width="16" height="10" rx="2" fill="#b9b9b9" stroke="#2b1606" strokeWidth="3" />
        <line x1="17" y1="48" x2="31" y2="48" stroke="#2b1606" strokeWidth="2" />
      </svg>
      <span className="b-button">B</span>
    </span>
  )
}
