import Link from 'next/link';

export default function StudentInfo() {

  return (
    <ul>
      <li>Danny Horning</li>
      <li className='mt-5 bg-slate-600 rounded-lg '><Link href="https://github.com/DannyHorning/cprg306-assignments">Github Link</Link></li>
      <li className='mt-5 bg-slate-600 rounded-lg '><Link href="/">Home</Link></li>
    </ul>
  );
}
