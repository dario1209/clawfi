import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <div className="p-8">
        <Image
          src="/clawfi-logo.jpg"
          alt="ClawFi Logo"
          width={200}
          height={80}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <Image
            src="/clawfi-retro.jpg"
            alt="ClawFi Claw Machine"
            width={800}
            height={960}
            className="w-full h-auto"
            style={{ imageRendering: 'pixelated' }}
            priority
          />
        </div>
      </div>
    </main>
  )
}
