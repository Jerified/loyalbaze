
const API_KEY=process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themovie`)
  return (
    <main className={styles.main}>
      hello
    </main>
  )
}
