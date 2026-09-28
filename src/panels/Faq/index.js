import React from 'react'

import {Portrait} from '../../components/Portrait'
import {Censored} from '../../components/Censored'
import {Gregg} from '../../components/Gregg'

import '../Panels.scss'
import './Faq.scss'

// a line of dialogue: Conker (clueless, as ever) asks; Birdy answers
const Line = ({who, asks, children}) => (
  <div className={'faq-line ' + (asks ? 'faq-ask' : 'faq-reply')}>
    <Portrait who={who} />
    <p className={(asks ? 'question' : 'answer') + ' speech-bubble'}>
      {children}
    </p>
  </div>
)

export const FaqPanel = () => {
  return (
    <section className="panel faq">
      <h2 className="panel-headline">
        Frequently Asked Questions
      </h2>
      <Gregg />

      <Line who="conker" asks>
        When is it going to be done?
      </Line>
      <Line who="birdy">
        ... these things take years. Right now it&apos;s just me - at the current rate of progress it&apos;ll be done around 2030!
      </Line>

      <Line who="conker" asks>
        What about Twelve Tails (12T)? Have you uncovered anything cool yet?
      </Line>
      <Line who="birdy">
        There&apos;s very little in terms of 12T content left in BFD (see <a href="https://tcrf.net/Conker%27s_Bad_Fur_Day" target="_blank" rel="noreferrer">TCRF</a>). in terms of code - probably a lot has been re-used/re-cycled.
      </Line>

      <Line who="conker" asks>
        Ok, then what about the DEBUG and ECTS ROMs?
      </Line>
      <Line who="birdy">
        The DEBUG ROM is very similar in terms of layout to the retail ROMs, I expect much of the code/assets are the same too. ECTS ROM does not have the same layout and so needs further investigation.
      </Line>

      <Line who="conker" asks>
        I&apos;m in. What can I do to help?
      </Line>
      <Line who="birdy">
        Great! Checkout the <a href="https://github.com/mkst/conker/wiki/Contributing" target="_blank" rel="noreferrer">Contributing</a> page on the <a href="https://github.com/mkst/conker/wiki" target="_blank" rel="noreferrer">Wiki</a> or find me on Discord (mkst#4741).
      </Line>

      <Line who="conker" asks>
        <Censored>Damn</Censored>, this website is horrible.
      </Line>
      <Line who="birdy">
        Not really a question... But yeah, feel free to <a href="https://github.com/mkst/conker-website" target="_blank" rel="noreferrer">improve it!</a>
      </Line>
    </section>
  )
}
