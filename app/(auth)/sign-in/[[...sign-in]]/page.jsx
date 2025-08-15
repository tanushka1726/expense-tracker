import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <>
    <div className="ml-10 flex h-screen items-center justify-center" >
      <SignIn />

    </div>
    
    
    </>
     

  )
}