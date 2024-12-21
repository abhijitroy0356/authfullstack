import { useState ,useRef,useEffect } from "react"


const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className=" p-10 bg-gray-300">
        <h1 className="text-left mb-5 text-[30px]">Signup</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex">
           <div className="">
                <div className="mb-2">First Name</div>
                <input type="text" placeholder="example Abhiijit Roy" className="border px-2 py-1 rounded" />
            </div>  
            <div className="ml-5">
                <div className="mb-2">Last Name</div>
                <input type="text" placeholder="example Abhiijit Roy" className="border px-2 py-1 rounded" />
            </div> 
            </div> 
            <div>
                <div>email</div>
                <input type="email" placeholder="xyz@gmail.com" className="border px-2 py-1 rounded" />
            </div>
            <div>
                <div>Username</div>
                <input type="text" placeholder="example Abhiijit Roy" className="border px-2 py-1 rounded" />
            </div>
            <div>
                <div>Password</div>
                <input type="password" placeholder="*******" className="border px-2 py-1 rounded" />
            </div>
            <div>
                <div>Confirm Password</div>
                <input type="password" placeholder="******" className="border px-2 py-1 rounded" />
            </div>
            <div className="flex justify-center">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Signup
                </button>
            </div>
            <span className="text-center">Already have an account?  <a className="underline "href='/login'>login</a></span>
        </div>
    </div>
</div>
  )
}

export default Signup