import React from 'react'

const Result = ({results}: any) => {
  return (
    <div >
      {results.map((result): any => {
        <Card key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Result