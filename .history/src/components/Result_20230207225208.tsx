import React from 'react'

const Result = ({results}) => {
  return (
    <div>
        {results.map(result => {
            <Card key={} />
        })}
    </div>
  )
}

export default Result