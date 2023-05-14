import './App.css'
import { useMutation, useQuery } from '@apollo/client'
import { PING, GET_TORNEOS_INTERNOS } from './services/torneosInternos/querys'
import { useState } from 'react'
import { SIGNIN } from './services/torneosInternos/matations'

const App = () => {
  // let { loading, data } = useQuery(PING)
  // let { loading2, data2 } = useQuery(GET_TORNEOS_INTERNOS)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginUser, { data3, loading3 }] = useMutation(SIGNIN)

  const [render, setRender] = useState(false)

  // if (loading) return <p>Loading...</p>

  // if (!loading && data && render) {
  //   console.log(data)
  //   setRender(!render)
  // }
  // if (!loading2 && data2 && render) {
  //   console.log(data2)
  //   setRender(!render)

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({
      variables: {
        email: e.target[0].value,
        password: e.target[1].value,
      },
    })
  }

  if (!loading3 && data3) {
    console.log(data3)
    setRender(!render)
  }

  return (
    <>
      <div>
        <p>Torneos Internos</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name=''
          id=''
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name=''
          id=''
          placeholder='pass'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={() => handleSubmit} />
      </form>
    </>
  )
}

export default App
