import React from 'react'
import useFetchJob from './useFetchJob'
import { Container } from 'react-bootstrap'

function App() {
  const { jobs, loading, error } = useFetchJob()
  return (
    <Container>
      {loading && <h1>loading...</h1>}
      {error && <h1>error...</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}

export default App;
