import Image from "next/image"

import {createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers"

import type { Database } from "@/lib/database.types"


const Home = async() => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const{
    data: {session},
  } = await supabase.auth.getSession()

  return (
    <div className="flex flex-col items-center justify-start h-screen pt-10">
        <Image
          src="/profile.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="mb-4"
        />
      <p className="text-2xl font-bold text-gray-700">手紙を届けてみよう～！！</p>
    </div>
  )
}

