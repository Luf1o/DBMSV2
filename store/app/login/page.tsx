import Image from "next/image";
import Link from "next/link";
const Login = () => {
  return (
    <div className="w-full h-[80vh] bg-neutral-600 flex items-center justify-center">
      <div
        className="w-auto m-auto p-4 rounded-lg flex flex-col gap-9 items-center justify-center bg-neutral-800 border-4
         border-rose-500 shadow-2xl"
      >
        <div className="w-[10rem] h-[10rem] rounded-full bg-slate-400"></div>
        <div className="flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-lg"
          />
        </div>
        <div>
          <Link href="/../store/" className="bg-rose-500 p-2 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
