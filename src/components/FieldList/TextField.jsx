const TextField = ({ field }) => {
  return (
    <div className="p-4 border rounded space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="text"
        placeholder="Enter input"
        className="w-full border rounded px-2 py-1"
        disabled
      />
    </div>
  );
};

export default TextField;
