import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Nyayanidhi">
      <img src="/images/NN.png" alt="Nyayanidhi" height={"58px"} width={"58px"} />
    </Link>
  )
}
