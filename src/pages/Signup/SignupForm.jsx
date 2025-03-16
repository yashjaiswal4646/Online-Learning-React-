import { useState } from "react";
import FormInput from "./FormInput";

const SignupForm = () => {
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
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex justify-center pt-12"
    >
      <div className="absolute bg-fuchsia-700 blur-[80px] h-[400px] top-[80px] w-[200px] z-[1]" />
      <div className="relative px-0 py-14 border border-fuchsia-700 border-solid shadow-[0_4px_400px_#000] w-[500px] z-[2] max-sm:px-4 max-sm:py-6 max-sm:w-[85%] rounded-2xl">

        {/* Signup Title */}
        <h2 className="mb-6 text-3xl font-semibold text-center text-white">Signup</h2>

        
        <FormInput
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange("fullName")}
        />
        <FormInput
          type="email"
          placeholder="Email Id"
          value={formData.email}
          onChange={handleChange("email")}
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange("password")}
        />
       <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
          <select
            value={formData.gender}
            onChange={handleChange("gender")}
            className="px-4 py-0 text-xl text-white border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <FormInput
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange("phone")}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-6 mb-0 text-xl text-white rounded-full border border-fuchsia-700 border-solid cursor-pointer bg-stone-950 bg-opacity-90 h-[45px] w-[150px] max-sm:text-lg max-sm:h-[40px] max-sm:w-[130px] hover:bg-fuchsia-700"
          >
            Sign Up
          </button>
        </div>

      </div>
    </form>
  );
};

export default SignupForm;