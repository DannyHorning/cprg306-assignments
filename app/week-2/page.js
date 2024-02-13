import StudentInfo from "./student-info";

export default function Page() {
  return (
    <div className="flex justify-center items-center text-center text-slate-400 p-4 rounded-xl">
    <main className=" bg-slate-900 p-8 rounded-xl">
      <h1 className="text-2xl font-bold mb-1">Student Link</h1>
      <StudentInfo />
    </main>
    </div>
  );
}