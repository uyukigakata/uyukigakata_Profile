import Image from "next/image"



export default function Home(){
  

  return (
    <div className="flex flex-col items-center justify-start h-screen pt-10">
  
      <div>
        <Image
          src="/profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="mb-4"
        />
      </div>
      </div>
  )
}

