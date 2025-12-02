-// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        {/* Small label */}
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-500 mb-4">
          Neo-GameFi AMM/PM
        </p>

        {/* Big hero wordmark */}
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] mb-6">
          ClawFi
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-xl text-neutral-300 max-w-2xl">
          Claw your way to the top.
        </p>
      </div>
    </main>
  )
}
