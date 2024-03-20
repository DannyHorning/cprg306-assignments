"use client";

import { useUserAuth } from "./_utils/auth-context.js"
import Link from 'next/link';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <main className="mx-auto max-w-sm p-2">
        <div className="flex flex-col justify-center text-center  bg-slate-700 text-slate-300 rounded-md p-3 font-bold">
            <h1>Week 8</h1>
            <p>{user ? "Welcome, " + user.displayName : "Please sign in"}</p>
        </div>
        <div className="flex flex-col justify-center text-center m-2 p-2">
            {user && (
                <div>
                <button onClick={firebaseSignOut} className="m-2 p-2 bg-slate-900 text-slate-300 rounded-md">
                    Sign out
                </button>
                <Link href="/week-8/shopping-list" className="m-2 p-2 bg-slate-900 text-slate-300 rounded-md">View Shopping List</Link>
                </div>

            )}
            {!user && (
                <button onClick={gitHubSignIn} className="m-2 p-2 bg-slate-900 text-slate-300 rounded-md">
                    Sign in with GitHub
                </button>
            )}
        </div>
        </main>
    );
};

