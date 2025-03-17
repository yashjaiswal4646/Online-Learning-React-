import React from "react";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex justify-center pt-20"
    >
      {/* Background Blur Effect */}
      <div className="absolute bg-fuchsia-700 blur-[80px] h-[400px] top-[80px] w-[200px] z-[1]" />

      {/* Login Form Container */}
      <div className="relative px-0 py-14 border border-fuchsia-700 border-solid 
                      shadow-[0_4px_400px_#000] w-[500px] z-[2] max-sm:px-4 
                      max-sm:py-6 max-sm:w-[85%] rounded-2xl">
        
        {/* Login Title */}
        <h2 className="mb-4 text-3xl font-semibold text-center text-white">Login</h2>

        {/* Inputs with Gap */}
        <div className="flex flex-col items-center w-full gap-6">
          <Input type="text" placeholder="Email Id" />
          <Input type="password" placeholder="Password" />
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="mx-auto mt-6 text-2xl rounded-full border border-fuchsia-700 
                     border-solid bg-stone-950 bg-opacity-90 h-[50px] w-[140px] 
                     max-sm:text-xl max-sm:h-[40px] max-sm:w-[110px] hover:bg-fuchsia-900"
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
