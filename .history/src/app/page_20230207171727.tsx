
const API_KEY=process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"} ? api_key=${API_KEY}&language=en-us`)
  return (
    <main className={styles.main}>
      hello
    </main>
  )
}
