import Link from "next/link";

export default function Home() {
  return (
  <div className="bg-white m-20">
    <Link href="/deathclock" className=" hover:underline text-blue-500 hover:text-blue-700">deathclock</Link>
  </div>
  );
}
