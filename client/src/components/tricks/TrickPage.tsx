import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'
import TrickEditForm  from './TrickEditForm'
import TrickDisplayForm  from './TrickDisplayForm'
import Loading from '../common/Loading'
import { useTrickQuery } from "../../generated/graphql"

interface Params { id: string; }

const TrickPage = () => {
  let { id } = useParams<Params>()

  const { data, error, loading } = useTrickQuery({variables: {id: id}})
  const [editing, setEditing] = useState(false)

  const handleEditingClick = () => {
    setEditing(!editing)
  }

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
    <>
      <button onClick={handleEditingClick}>
        <FaPen  />
      </button>
      {
        editing ? <TrickEditForm trick={data.trick}/> : <TrickDisplayForm trick={data.trick} />
      }
    </>
  )
}

export default TrickPage
