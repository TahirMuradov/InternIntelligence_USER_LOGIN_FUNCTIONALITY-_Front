"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  const sessions=useSession();
  if(sessions.data?.user){
   
    return (
      <div className="text-center">
        <p>
        {
          sessions.data?.user.firstName 
        }
        
        {sessions.data?.user.lastName}

        </p>
        <button onClick={()=>signOut({redirect:false})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Sign Out
</button>
      </div>
    )
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/auth/login"}>Login</Link>

    </div>
  );
}
