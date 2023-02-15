import React from 'react'

const Result = ({results}: any) => {
  return (
    <div cll>
      {results.map((result): any => {
        <Card key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Result