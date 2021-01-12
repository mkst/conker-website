import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import './GitHub.scss'

export const GitHub = ({
  url
}) => {
  return (
    <div className="github">
      <a href={url} alt="Check it out on GitHub" target="_blank" rel="noreferrer">
      <span className="github-icon"><FontAwesomeIcon icon={faGithub} /></span>
      <span className="github-text">GitHub</span>
      </a>
    </div>
  )
}
