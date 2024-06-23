import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyLinks from './pages/MyLinks'

const App: React.FC = () => {
  // const [apiCalled, setApiCalled] = useState(false)

  // useEffect(() => {
  //   const callApi = async () => {
  //     try {
  //       const api = ''

  //       if (!apiCalled) {
  //         const response = await fetch(api, {
  //           method: 'POST'
  //         })

  //         if (response.ok) {
  //           console.log('API call successful')
  //         } else {
  //           console.error('API call failed')
  //         }

  //         setApiCalled(true)
  //       }
  //     } catch (error) {
  //       console.error('Error calling API:', error)
  //     }
  //   }

  //   callApi()
  // }, [apiCalled])

  return (
    <Router>
      <Switch>
        <Route path="/" component={MyLinks} />
      </Switch>
    </Router>
  )
}

export default App
