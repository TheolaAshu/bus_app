import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center  justify-between px-5">
      <div>
        <Image
          src="/buslogo.png"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-border"
          priority
        />
      </div>
      <ul className="flex items-center gap-3 font-lg ">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/posts">About </Link>
        </li>
        <li>
          <Link href="/forms">Contact-Us </Link>
        </li>
      </ul>
    </div>
  );
}
