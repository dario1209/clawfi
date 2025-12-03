import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top bar with logo */}
        <header className="pt-8 pb-10 flex items-center">
          <Image
            src="/4.jpg"          // <-- your logo file in /public
            alt="ClawFi logo"
            width={80}
            height={80}
            className="h-12 w-auto"  // small logo; change h-12 to h-8 or h-10 if you want smaller
            priority
          />
        </header>

        {/* Hero text block */}
        <section className="flex items-center min-h-[60vh]">
          <div className="max-w-5xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-4">
              Neo-GameFi AMM/PM
            </p>
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] mb-6">
              ClawFi
            </h1>
            <p className="text-base md:text-xl text-neutral-300 max-w-2xl">
              Claw your way to the top.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
