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
      className="flex relative flex-col gap-6 p-16 border border-fuchsia-700 border-solid shadow-[0_4px_500px_#000] w-[450px] z-[2] max-md:p-10 max-md:w-[80%] max-sm:p-6"
    >
      {/* Decreased padding and width for a smaller form */}
      <div className="w-full">
        <Input type="text" placeholder="Email Id" />
      </div>
      <div className="w-full">
        <Input type="password" placeholder="Password" />
      </div>
      <Button
        type="submit"
        className="mx-auto mt-6 mb-0 text-2xl rounded-xl border border-fuchsia-700 border-solid bg-stone-950 bg-opacity-90 h-[50px] w-[140px] max-sm:text-xl max-sm:h-[40px] max-sm:w-[110px]  hover:bg-fuchsia-900"
      >
        Login
      </Button>
      
    </form>
  );
};

export default LoginForm;