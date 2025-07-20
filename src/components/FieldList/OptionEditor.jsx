const OptionEditor = ({ options, onChange }) => {
  const updateOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    onChange(updated);
  };

  const addOption = () => {
    onChange([...options, '']);
  };

  const removeOption = (index) => {
    const updated = [...options];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <>
      {options.map((option, index) => (
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
    </>
  );
};

export default OptionEditor;
