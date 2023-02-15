
const API_KEY=process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrend"
  return (
    <main className={styles.main}>
      hello
    </main>
  )
}
