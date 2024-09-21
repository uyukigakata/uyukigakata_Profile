import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div>HomePage</div>
        <Image
          src="/profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </div>
  )
}

