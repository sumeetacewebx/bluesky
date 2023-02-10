// 404.js
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
          <h1 className="border-y-4 border-indigo-500 border-gray-300 pr-7">404</h1>
          <div className="text-xl border-r-2 border-slate-500">
             Sorry could not find this page 😅 
             <Link className="text-cyan-500" href="/">Go back home</Link> 
          </div>
      </div>
    </>
  );
}
