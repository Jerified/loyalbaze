import React from 'react'

const Result = ({results}) => {
  return (
    <div>
        {results.map(result => {
            <Card key={result.} />
        })}
    </div>
  )
}

export default Result