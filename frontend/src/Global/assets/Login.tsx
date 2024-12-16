

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className=" p-10 bg-gray-300">
        <h1 className="text-left mb-5 text-[30px]">Login</h1>
        <div className="flex flex-col space-y-4">
            <div>
                <div>Username:</div>
                <input type="text" placeholder="example Abhiijit Roy" className="border px-2 py-1 rounded" />
            </div>
            <div>
                <div>Password:</div>
                <input type="password" placeholder="*******" className="border px-2 py-1 rounded" />
            </div>
            <div className="flex justify-center flex-col">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Log-in
                </button>
                <span className="text-center">don't have an account ? <a className="underline "href='/signup'>Signup</a></span> 
            </div>
            
          
           
        </div>
        
    </div>
</div>

  )
}

export default Login