import ForgotPassword from "@/Components/Auth/ForgotPassword";




const forgotPassword:React.FC = () => {



  try {
    const apiDomen = process.env.apiDomen;
    return <ForgotPassword key={1} apiDomen={apiDomen}/>
  } catch (error) {
    console.error(error)
  }
}
export default forgotPassword