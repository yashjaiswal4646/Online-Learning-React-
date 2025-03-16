const FormInput = ({ type, placeholder, value, onChange }) => {
    return (
      <div className="mx-auto my-0 mb-4 w-[380px] max-sm:w-[90%]">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-4 py-0 text-xl text-white border border-solid rounded-full border-fuchsia-700 bg-stone-950 h-[50px] w-full max-sm:text-lg max-sm:h-[40px]"
        />
      </div>
    );
  };
  
  export default FormInput;
  