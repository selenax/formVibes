const TextField = ({ field, onUpdate }) => {
  return (
    <div className="p-4 border rounded space-y-1">
      <div className="flex items-center justify-between">
        <input
          type="text"
          value={field.label}
          onChange={(e) => onUpdate(field.id, { label: e.target.value })}
          className="text-sm font-medium text-gray-700 border px-2 py-1 rounded w-full"
        />
        {field.required && (
          <span className="text-red-500 ml-2 font-bold">*</span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => onUpdate(field.id, { required: e.target.checked })}
        />
        <label className="text-sm text-gray-600">Required</label>
      </div>
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
