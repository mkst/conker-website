import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import {Lightbulb} from '../Lightbulb'

import './GitHub.scss'

export const GitHub = ({
  chapter,
  url
}) => {
  return (
    <a
      className="github pause-option has-lightbulb"
      href={url}
      title="Check it out on GitHub"
      target="_blank"
      rel="noreferrer">
      <Lightbulb />
      <span className="pause-option-chapter">Chapter {chapter}</span>
      <span className="pill">
        <FontAwesomeIcon icon={faGithub} />
        <span className="github-text">GitHub</span>
      </span>
    </a>
  )
}
