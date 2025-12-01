const InputField = ({ label, inputId, type = "text", value, onChange, placeholder, classNames }: any) => (
  <div className={`mb-4 ${classNames}`}>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      id={inputId}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md px-3 py-8 focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default InputField;