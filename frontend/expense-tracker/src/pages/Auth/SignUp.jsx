import React , { useState } from "react"
import AuthLayout from "../../components/layouts/AuthLayout"
import { useNavigate,Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
const SignUp = ()=>{
    const[profilePic,setProfilePic] = useState(null);
    const [fullName,setFullName]=useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");

    const [error,setError] = useState(null);
    const navigate = useNavigate();

    //Handle sinup form 
    const handleSignUp = async(e)=>{

    }
    return(
        <>
        <AuthLayout>
            <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
             <h1 className="text-xl font-semibold text-black">Create An Account</h1>
             <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below</p>
             <form onSubmit={handleSignUp}>
                <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                    value={fullName}
                    onchange={({target})=>setFullName(target.value)}
                    label="Full name"
                    placeholder="John"
                    type="text"
                    />
                    <Input 
                type="text"
                value={email}
                onChange={({target})=>setEmail(target.value)} 
                label="Email Address" 
                placeholder="john@gmail.com"/>

                <div className="col-span-2">
                     <Input 
                type="password"
                value={password}
                onChange={({target})=>setPassword(target.value)} 
                label="Password" 
                placeholder="Min 8 Characters "/>

                </div>

                

                    
                </div>
             </form>

            </div>
           
            </AuthLayout>

        </>
    )
}
export default SignUp