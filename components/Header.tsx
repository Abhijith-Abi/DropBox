import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
    return (
        <header className="flex items-center justify-between ">
            <Link href={"/"} className="flex items-center space-x-2">
                <div className=" w-fit bg-[#0160FE]">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Dropbox_logo.svg"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </div>
                <h1 className="font-bold text-xl">DropBox</h1>
            </Link>
            <div className="flex items-center space-x-2 px-5">
                {/* Theme togler */}
                <ThemeToggler />

                <UserButton afterSignOutUrl="/" />
                <SignedOut>
                    <SignInButton afterSignInUrl="/dashboard" mode="modal" />
                </SignedOut>
            </div>
        </header>
    );
}

export default Header;
