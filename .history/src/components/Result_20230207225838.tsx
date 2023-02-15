import React from 'react'

const Result = ({results}: any) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grids-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => {
        <Card key={result.id} result={result} />;
      })}
    </div>
  );
}

export default Result