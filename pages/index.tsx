import Head from 'next/head'
import { useState } from 'react'

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
      <footer>
        <div onClick={changeMode} className='modes'>
          {advancedMode ? 'Advanced' : 'Normal'} Mode
        </div>

        <div className='rules'>Rules</div>
      </footer>
    </div>
  )
}
