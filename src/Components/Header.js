import{
    MenuIcon,
    SearchIcon,
    ShoppingBagIcon,
}from "@heroicons/react/solid"
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { Router, useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
 
function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
 
    return (
        <header>
            {/* top nav */}
            <div className = "flex items-center bg-transparent p-1 flex-grow py-2 navbarCustom">
                <div className ="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={() => router.push('/')}
                    src = "/sket-mall.jpeg"
                    width = {200}
                    height={50}
                    objectFit = "contain"
                    className = "cursor-pointer outline-none"
                    />
                </div>
                {/* Search */}
                {/* <div className ='sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400  hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink  rounded-l-md focuse:outline-none px-4' type="text" />
                    <SearchIcon className ="h-12 p-4"/>
                </div> */}
                {/* Right */}
                <div className ='flex absolute right-0 items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div className="text-lg cursor-pointer">About us</div>
                <div className="text-lg cursor-pointer">Contact</div>
                <div onClick={!session ?  signIn : signOut} className ='link'>
                    <p>
                        {session ? `Hello, ${session.user.name}` : "Sign in"}
                    </p>
                    <p className ='font-extrabold md:text-sm'>Account</p>
                </div>
 
                {
                    session ? <div onClick={() => session && router.push("/orders")} className ='link'>
                    <p className ='font-extrabold md:text-sm'>Orders</p>
                </div> : ''
                }
 
                <div onClick={() => router.push('/checkout')} className ='relative link flex items-center'>
                    <span className ='absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                        {items.length}
                    </span>
                    <ShoppingBagIcon className ='h-10'></ShoppingBagIcon>
                    <p className ='hidden md:inline font-extrabold md:text-sm mt-2'>Cart</p>
                </div>
            </div>
            </div>
        </header>
    )
}
 
export default Header
