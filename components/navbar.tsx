import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify between h-16">
          <div className="flex items-center">
            <div className="flex items-center flex-shrink-o">
              <Image
                src="/newbuslogo.jpg"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-border"
                priority
              />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="ml-4 flex items-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Login{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  SignUp{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contact-Us{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
