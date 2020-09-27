import Head from "next/head"
import AppLayout from "../components/AppLayout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Office</title>
      </Head>
      <AppLayout>
        <h1>Main content</h1>
      </AppLayout>
    </>
  )
}
