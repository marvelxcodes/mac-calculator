import { useState } from 'react'

function App() {
  const [expression, setExpression] = useState<string>()

  return (
    <div className="App">
      <div className="container">
        <h1 className='text-4xl font-helvetica-b'>Hello World</h1>
      </div>
    </div>
  )
}

export default App
