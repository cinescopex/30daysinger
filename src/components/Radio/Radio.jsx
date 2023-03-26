function Radio({ checked, ...props }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        className={`${
          checked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
        } appearance-none h-6 w-6 border rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none`}
        checked={checked}
        {...props}
      />
    </div>
  );
}

export default Radio;
