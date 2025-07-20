const RadioField = ({ field, onUpdate }) => {
  const updateOption = (index, value) => {
    const newOptions = [...field.options];
    newOptions[index] = value;
    onUpdate(field.id, { options: newOptions });
  };

  const addOption = () => {
    onUpdate(field.id, { options: [...field.options, ''] });
  };

  const removeOption = (index) => {
    const newOptions = [...field.options];
    newOptions.splice(index, 1);
    onUpdate(field.id, { options: newOptions });
  };

  return (
    <div className="p-4 border rounded space-y-2">
      <input
        type="text"
        value={field.label}
        onChange={(e) => onUpdate(field.id, { label: e.target.value })}
        className="text-sm font-medium text-gray-700 border px-2 py-1 rounded w-full"
        placeholder="Field label"
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => onUpdate(field.id, { required: e.target.checked })}
        />
        <label className="text-sm text-gray-600">Required</label>
      </div>

      {field.options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={option}
            onChange={(e) => updateOption(index, e.target.value)}
            className="text-sm text-gray-600 border px-2 py-1 rounded w-full"
            placeholder={`Option ${index + 1}`}
          />
          <button
            onClick={() => removeOption(index)}
            className="text-red-500 text-sm"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        onClick={addOption}
        className="text-sm text-blue-500 hover:underline"
      >
        + Add Option
      </button>

      {/* Preview */}
      {field.options.map((option, index) => (
        <div key={`preview-${index}`} className="flex items-center space-x-2">
          <input type="radio" name={field.id} disabled />
          <label className="text-sm text-gray-500">
            {option || `Option ${index + 1}`}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;
