import React from 'react'

const Result = ({results}: any) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:">
      {results.map((result) => {
        <Card key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Result