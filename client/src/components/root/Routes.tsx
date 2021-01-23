import React, { Suspense } from 'react'
import { Spinner } from '@chakra-ui/core'
import { Switch, Route, useParams } from 'react-router-dom'

import TricksPage from "../tricks/TricksPage"
import TrickPage from "../tricks/TrickPage"
import NotFound from "../common/NotFound"

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={TricksPage}/>
          <Route path="/tricks/:id">
            <TrickPage/>
          </Route>
          <Route path="/notfound" exact component={NotFound} />
        </Switch>
    </Suspense>
  )
}

export default Routes
