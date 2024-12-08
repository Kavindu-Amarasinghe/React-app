import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", email, password);
  };
  return (
    <div className="w-[380px] mx-auto">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <--Title--> */}
          <h3 className="text-xl font-semibold text-center text-gray-900 ">
            Sign in to Evotech
          </h3>

          {/* <--email--> */}

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 p-2.5 rounded-lg"
              placeholder="yourname@email.com"
            />
          </div>

          {/* <--Password--> */}

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 p-2.5 rounded-lg"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>

          {/* <--- remeber me ---> */}
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                />
              </div>

              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember Me
                </label>
              </div>
            </div>
            <a
              href="/forget-password"
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              Forget password?
            </a>
          </div>

          {/* <-- submit --> */}
          <button
            type="sumbit"
            className="w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Sign in
          </button>

          <div className="flex justify-center space-x-1 text-sm font-medium text-gray-500 ">
            <span>Not Registered?</span>
            <a href="/register" className="text-blue-700 hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
