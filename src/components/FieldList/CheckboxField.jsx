const CheckboxField = ({ field, onUpdate }) => {
  return (
    <div className="p-4 border rounded space-y-2">
      {/* Label input */}
      <input
        type="text"
        value={field.label}
        onChange={(e) => onUpdate(field.id, { label: e.target.value })}
        className="text-sm font-medium text-gray-700 border px-2 py-1 rounded w-full"
        placeholder="Field label"
      />

      {/* Required checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => onUpdate(field.id, { required: e.target.checked })}
        />
        <label className="text-sm text-gray-600">Required</label>
      </div>

      {/* Custom option label */}
      <input
        type="text"
        value={field.optionLabel || ''}
        onChange={(e) => onUpdate(field.id, { optionLabel: e.target.value })}
        className="text-sm text-gray-600 border px-2 py-1 rounded w-full"
        placeholder="Checkbox option label"
      />

      {/* Preview checkbox */}
      <div className="flex items-center space-x-2">
        <input type="checkbox" disabled />
        <label className="text-sm text-gray-500">
          {field.optionLabel || 'Sample checkbox'}
        </label>
      </div>
    </div>
  );
};

export default CheckboxField;
