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
            <div class="p-20 h-full grid content-center items-center space-y-4">
              <span className="text-center text-xl font-bold">
                Hello Again!
              </span>
              <span className="text-center text-sm">
                Welcome back you've been missed!
              </span>
              <form action="#" method="post">
                <div className="py-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username"
                    className="w-full text-xs px-4 py-2 focus:outline-none rounded-lg border border-gray-100"
                  />
                </div>
                <div className="py-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full text-xs px-4 py-2 focus:outline-none rounded-lg border border-gray-100"
                  />
                </div>
                <div className="py-2 text-end">
                  <a href="#" className="text-xs">
                    Recovery Password
                  </a>
                </div>
                <div className="py-4">
                  <button
                    type="submit"
                    className="w-full text-xs rounded-lg text-white px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600"
                  >
                    Login
                  </button>
                </div>
                <div className="px-2 text-xs text-center">Or sign in with</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
