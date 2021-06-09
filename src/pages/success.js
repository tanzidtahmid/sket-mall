import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Header from "../Components/Header";

function success() {

    const router = useRouter();

    return (
        <div className="bg-green-100 h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto ">
            <div className="flex flex-col p-10 items-center">
                <div className="flex space-x-2 mb-5">   
                    <h1 className="text-3xl">Thank You, Your Order has been confirmed! </h1>
                    <CheckCircleIcon className="text-green-500 h-10"/>
                </div>
                <p>Thank You for shopping in Sket-Mall. Please Check your mail for order details.</p>
                <button onClick={() => router.push('/orders')} className="button  mt-8">Orders</button>
            </div>
            </main>
        </div>
    )
}

export default success
