

import Link from 'next/link';
import ItemList from './item-list.js';
export default function Page() {
  return (
    <div className='flex justify-center items-center text-center'>
    <main className='m-4 text-slate-900'>
      <Link href="/" className='text-slate-200 bg-slate-900 p-2 rounded-md text-lg hover:bg-slate-700'>Home</Link>
      <h1 className='mt-4 text-2xl font-bold'>Shopping List</h1>
      <ItemList />
    </main>
    </div>
  );
}