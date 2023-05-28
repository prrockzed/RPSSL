import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header.tsx'

export default function Home() {
  const [advancedMode, setAdvancedMode] = useState(false)

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
    </div>
  )
}
