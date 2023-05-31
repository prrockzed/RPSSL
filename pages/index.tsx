import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header.tsx'
import Results from '../components/Results.tsx'
import Play from '../components/Play.tsx'
import Rules from '../components/Rules.tsx'

export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(-1)
  const [score, setScore] = useState(0)

  const changeMode = () => {
    setAdvancedMode(!advancedMode)
  }

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Head>
        <title>RPSSL</title>
      </Head>

      <Header advanced={advancedMode} score={score} />
      <footer>
        <div onClick={changeMode} className='modes'>
          Go to {advancedMode ? 'Normal' : 'Advanced'} Mode
        </div>
      </footer>
      <div id='modal' className='rules' onClick={toggle}>
        Rules
      </div>
      {open ? <Rules advanced={advancedMode} toggle={toggle} /> : null}

      {selected >= 0 ? (
        <Results
          advanced={advancedMode}
          selected={selected}
          setselected={(value) => setSelected(value)}
          setscore={setScore}
        />
      ) : (
        <Play
          setselected={(value) => setSelected(value)}
          advanced={advancedMode}
        />
      )}
    </div>
  )
}
