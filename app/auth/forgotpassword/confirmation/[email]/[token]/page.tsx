
import ChangePasswordForm from "@/Components/Auth/ChangePasswordForm";
import Result from "@/types/ApiResultType";


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
return(<>

{decodeURIComponent( params.email)}<br/>
{decodeURIComponent( params.token)}
</>)
}
export default page
