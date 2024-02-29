function Login() {
  return (
    <div className="grid grid-cols-6 place-content-center min-h-screen bg-gray-100">
      <div className="col-start-2 col-span-4 border border-gray-300 rounded-lg w-full overflow-hidden shadow-xl">
        <div className="grid grid-cols-12 p-2 bg-gradient-to-r from-white to-blue-50 ">
          <div className="col-span-6">
            <img
              src="../../public/bear.png"
              className="rounded-lg"
              alt="People who knows"
            />
          </div>
          <div className="col-span-6">
            <div class="p-2 h-full grid content-center items-center place-content-center space-y-4">
              <span className="text-center text-xl font-bold">
                Hello Again!
              </span>
              <span className="text-sm">Welcome back you've been missed!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
