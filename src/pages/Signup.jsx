import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Signup = () => {

    // const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen text-white bg-black-900">
      {/* Header */}
      <header className="flex items-center justify-between px-7 py-0 border-b border-solid bg-stone-950 border-b-fuchsia-900 h-[95px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-sm:px-4 max-sm:py-0 max-sm:h-[70px]">
        <h1 className="text-3xl font-bold">
          <span>Code</span>
          <span className="text-purple-900">Hub</span>
        </h1>
        <nav className="flex justify-center flex-1 gap-16 max-md:gap-8 max-sm:hidden">
          <button className="text-4xl cursor-pointer max-md:text-3xl hover:text-fuchsia-500">Home</button>
          <button className="text-4xl cursor-pointer max-md:text-3xl hover:text-fuchsia-500">Course</button>
          <button className="text-4xl cursor-pointer max-md:text-3xl hover:text-fuchsia-500">About</button>
        </nav>
        <button className="px-5 py-1.5 text-xl bg-fuchsia-700 cursor-pointer rounded-[32px] max-sm:px-4 max-sm:py-1 max-sm:text-base transition-colors duration-300 hover:bg-fuchsia-500">
          Login
        </button>
      </header>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="relative flex justify-center pt-12">
        <div className="absolute bg-fuchsia-700 blur-[80px] h-[400px] top-[80px] w-[200px] z-[1]" />
        <div className="relative px-0 py-14 border border-fuchsia-700 border-solid shadow-[0_4px_400px_#000] w-[500px] z-[2] max-sm:px-4 max-sm:py-6 max-sm:w-[85%] rounded-2xl">
          
          {/* Signup Title */}
          <h2 className="mb-6 text-3xl font-semibold text-center">Signup</h2>

          {/* Form Inputs */}
          <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange("fullName")}
              className="px-4 py-0 text-xl border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
            />
          </div>

          <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
            <input
              type="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange("email")}
              className="px-4 py-0 text-xl border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
            />
          </div>

          <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange("password")}
              className="px-4 py-0 text-xl border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
            />
          </div>

          <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
            <select
              value={formData.gender}
              onChange={handleChange("gender")}
              className="px-4 py-0 text-xl border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange("phone")}
              className="px-4 py-0 text-xl border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 mb-0 text-xl rounded-full border border-fuchsia-700 border-solid cursor-pointer bg-stone-950 bg-opacity-90 h-[45px] w-[150px] max-sm:text-lg max-sm:h-[40px] max-sm:w-[130px] hover:bg-fuchsia-700"
            >
              Sign Up
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Signup;
