import React from "react";

const Login = () => {
  return (
    <div className="login-container flex p-12 justify-center items-center m-12">
      {/* Menambahkan wrapper div atau fragment */}
      <div>
        <img
          src="/login-ghamacaraka.png"
          alt="Login Photos Assets"
          className="login-photos rounded"
        />
      </div>

      <div className="w-full max-w-md">
        <form action="" className="bg-white p-8 rounded shadow-lg grid gap-4">
          <div className="login-form">
            <h1 className="text-2xl font-bold mb-4">Login E-Rapor</h1>
            <p className="text-gray-600 mb-6">
              Silahkan login untuk dapat mengakses aplikasi
            </p>

            {/* Grid untuk input */}
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1">
                <label htmlFor="username" className="font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="grid grid-cols-1">
                <label htmlFor="password" className="font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded mt-4"
            >
              Login
            </button>
          </div>

          {/* Footer */}
          <div className="login-footer text-center mt-4">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <a href="./sign-up.jsx" className="text-blue-500">
                Daftar sekarang!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
