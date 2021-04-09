import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>Hello! my name is Seung Hyeon Hwang. My hobby is watching movies. Thank you!</h2>
      <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
    </>
  )
}