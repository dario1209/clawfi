import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Image
        src="/landing-page-2.jpg"
        alt="ClawFi landing background"
        fill
        priority
        className="object-contain md:object-scale-down"
        style={{ objectPosition: 'center' }}
      />
    </main>
  )
}
