
import ChangePasswordForm from "@/Components/Auth/ChangePasswordForm";
import Result from "@/types/ApiResultType";
import Link from "next/link";

import { NextResponse } from "next/server";



const page:React.FC<{params:{token:string,email:string}}>=async ({params})=>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const apiDomen = process.env.apiDomen;
    const response = await fetch(
        `${apiDomen}api/Auth/CheckTokenForForgotPassword?Email=${encodeURIComponent(params.email)}&Token=${encodeURIComponent(params.token)}`
      );
   const result:Result<null>= await response.json();
    if (result.isSuccess) {
        return <ChangePasswordForm apiDomen={apiDomen} email={params.email}  token={params.token} key={1}/>
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-black-100">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md">
            <h2 className="text-xl font-semibold text-red-600">This link is no longer valid</h2>
            <p className="text-gray-600 mt-5">
              Please try again or request a new verification link.
            </p>
            <Link href={"/auth/forgotpassword"} className="mt-4 block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Request New Link
            </Link>
          </div>
        </div>
      );

}
export default page
