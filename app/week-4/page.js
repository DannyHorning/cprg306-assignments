import NewItem from './new-item.js';
import Link from 'next/link';
export default function Page(){
    return(
        <div className='flex justify-center items-center m-4'>
        <main className='bg-slate-900 p-4 rounded-lg'>
            <h1 className="text-2xl text-slate-200 text-center">Add to Shopping List</h1>
            <NewItem />
            <div className="flex justify-center">
                <Link href="/" className='m-2 bg-slate-700 p-1 rounded-md text-slate-200 text-center hover:bg-blue-300 active:bg-slate-800'>Home</Link>
            </div>
        </main>
        
        </div>
    )
}