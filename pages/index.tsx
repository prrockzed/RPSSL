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

  return (
    <div>
      <Head>
        <title>RPSSL</title>
      </Head>

      <Header advanced={advancedMode} score={score} />

      <footer>
        <div onClick={changeMode} className='modes'>
          {advancedMode ? 'Advanced' : 'Normal'} Mode
        </div>
        <div className='rules'>Rules</div>
      </footer>

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

      <Rules
        notclosed={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
      />
    </div>
  )
}
