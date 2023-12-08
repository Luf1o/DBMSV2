import Link from "next/link";

const page = () => {
  return (
    <div className="max-h-[90vh] min-h-[80vh] max-w-full flex-col flex items-center justify-center bg-blue-500">
      <div className="text-6xl p-2 ">
        <h1>Purchase Placed</h1>
      </div>
      <div className="text-3xl p-1">Thank you for shopping with us</div>
      <Link
        href="/../store/"
        className="hover:underline bg-red-400 px-6 py-2 rounded-xl "
      >
        Go Back
      </Link>
    </div>
  );
};

export default page;
