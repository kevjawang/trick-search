import React, { Suspense, lazy } from 'react'
import { Spinner } from '@chakra-ui/core'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const TricksPage = lazy(() => import("../tricks/TricksPage"))

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path="/" component={TricksPage}/>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
