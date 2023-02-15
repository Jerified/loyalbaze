import React from 'react'

const Result = ({results}: any) => {
  return (
    <div className="sm:grid sm:grid-cols-2">
      {results.map((result) => {
        <Card key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Result