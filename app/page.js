import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center items-center text-center text-slate-400 m-2">
    <main className=' bg-slate-900 p-4 rounded-xl text-xl'>
      <h1 className='font-bold text-2xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2">Week 2</Link><br />
      <Link href="./week-3">Week 3</Link><br />
      <Link href="./week-4">Week 4</Link><br />
      <Link href="./week-5">Week 5</Link><br />
      <Link href="./week-6">Week 6</Link><br />
      <Link href="./week-7">Week 7</Link><br />
      <Link href="./week-8">Week 8</Link><br />
      <Link href="./week-10">Week 10</Link><br />
    </main>
    </div>
  );
}