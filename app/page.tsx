import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        {/* LEFT: clawfi image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/claw-image.png"   // <-- match your filename in /public
            alt="ClawFi screens"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* RIGHT: text hero */}
        <div className="w-full md:w-1/2">
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
      </div>
    </main>
  )
}
