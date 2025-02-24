"use client"

import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useEffect } from "react";


function Navbar() {

    const {data: session} = useSession();
    const router = useRouter();
    //console.log(session);
    if (typeof window !== "undefined" && (window as any).jstag) {
        (window as any).jstag.send("identify");
        (window as any).jstag.send("identify", {
            email: session?.user?.email, 
            name: session?.user?.name,  
            loggedIn: true,
        });
    }
    
    //console.log((window as any).jstag.getEntity())
    //console.log((window as any).jstag.getCookie())
    //console.log(Object.keys((window as any).jstag))

    return(
        <nav className="bg-slate-900 flex items-center justify-between py-3 px-20 text-white">
            <Link href="/">
                NextAuth Google
            </Link>
            <Link href="dashboard">
                Dashboard
            </Link>

        {session?.user ? (
            <div className="flex gap-x-2 items-center">

                <p>{session.user.name} </p>
                <img src={session.user.image as string} alt="" className="w-10 h-10 rounded-full cursor-pointer"/>
                <button
                    onClick={ async () => { 
                        await signOut({
                            callbackUrl: "/"
                        });
                        //router.push('/');
                    }}
                    className="bg-sky-400 px-3 py-2 rounded"
                >
                    Log Out
                </button>
            </div>
        ) : (
            <button 
            onClick={() => signIn()}
            className="bg-sky-400 px-3 py-2 rounded"    
            >
                Sign In
            </button>
        )}
        </nav>
    )
}

export default Navbar;