import Loader from "@/Components/common/Loader";
import Result from "@/types/ApiResultType";







const page:React.FC<{params:{email:string,token:string}}> = async ({params:{email,token}}) => {


try {

  const apiDomen = process.env.apiDomen;


  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const response = await fetch(`${apiDomen}api/Auth/ChecekdConfirmedEmailToken`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      email:decodeURIComponent(email),
      token:decodeURIComponent(token)
    })
  });
  
const data:Result<null>=await response.json();

  
if (data.isSuccess) {

return (
  <>Your Profile Confirmed</>
 )
}
return ( <Loader/> )
}catch(error){
console.log(error)
}


}



  


export default page;