import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import { RootState } from '../store'

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <button className="btn btn-blue" onClick={()=>dispatch(increment())}>+</button>
        <h1>The value of count is {count} </h1>
        <button onClick={()=>dispatch(decrement())} className="btn btn-blue">-</button>
      </main>

    </div>
  )
}

export default Home
