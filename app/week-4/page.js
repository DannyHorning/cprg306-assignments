import NewItem from './new-item.js';
export default function Page(){
    return(
        <div className='flex justify-center items-center m-4'>
        <main className='bg-slate-900 p-4 rounded-lg'>
            <h1 className="text-2xl text-slate-200 text-center">Add to Shopping List</h1>
            <NewItem />
        </main>
        </div>
    )
}