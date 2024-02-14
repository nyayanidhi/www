import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Nyayanidhi">
      <img src="/images/NN.png" alt="Nyayanidhi" height={"50px"} width={"50px"} />
      <span className="bg-clip-text font-bold">Nyayanidhi</span>
    </Link>
  )
}
