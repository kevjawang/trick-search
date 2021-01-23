import React from 'react'
import { useParams } from 'react-router-dom'
import TrickDisplayForm  from './TrickDisplayForm'
import Loading from '../common/Loading'
import { useTrickQuery } from "../../generated/graphql"

interface Params { id: string; }

const TrickPage = () => {
  let { id } = useParams<Params>()

  const { data, error, loading } = useTrickQuery({variables: {id: id}})

  if (error)
    {
      return <div>{error.message}</div>
    }
  if (loading)
  {
    return <Loading/>
  }

  if (!data || !data.trick)
  {
    return <div>Nothing found</div>
  }

  return (
    <TrickDisplayForm trick={data.trick} />
  )
}

export default TrickPage
