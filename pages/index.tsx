import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header.tsx'
import Play from '../components/Play.tsx'
import Rules from '../components/Rules.tsx'

export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false)
  const [open, setOpen] = useState(false)

  const changeMode = () => {
    setAdvancedMode(!advancedMode)
  }

  return (
    <div>
      <Head>
        <title>RPSSL</title>
      </Head>

      <Header advanced={advancedMode} score={0} />

      <footer>
        <div onClick={changeMode} className='modes'>
          {advancedMode ? 'Advanced' : 'Normal'} Mode
        </div>
        <div className='rules'>Rules</div>
      </footer>

      <Play advanced={advancedMode}/>
      <Rules
        open={open}
        advanced={advancedMode}
        setopen={() => setOpen(!open)}
      />
    </div>
  )
}
