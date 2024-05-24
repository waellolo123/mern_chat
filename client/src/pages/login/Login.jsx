

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login
        <span className="text-blue-500 ml-4">Chat</span>
        <form>
         <div className="">
          <label className="label p-2">
           <span className="text-base label-text">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"/>
         </div> 
         <div className="">
          <label className="label">
           <span className="text-base label-text">Password</span>
          </label>
          <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10"/>
         </div>
         <a href="#" className="text-sm mt-2 inline-block text-start">{"Don't"} have an account? Creacte account</a>
         <div className="">
          <button className="btn btn-block btn-sm mt-2">Login</button>
         </div>
        </form>
      </h1>
     </div>
    </div>
  )
}

export default Login;