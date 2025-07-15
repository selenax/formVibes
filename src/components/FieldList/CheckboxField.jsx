const CheckboxField = ({ field, onUpdate }) => {
  return (
    <div className="p-4 border rounded space-y-2">
      <input
        type="text"
        value={field.label}
        onChange={(e) => onUpdate(field.id, { label: e.target.value })}
        className="text-sm font-medium text-gray-700 border px-2 py-1 rounded w-full"
      />

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => onUpdate(field.id, { required: e.target.checked })}
        />
        <label className="text-sm text-gray-600">Required</label>
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" disabled />
        <label className="text-sm text-gray-500">Sample checkbox</label>
      </div>
    </div>
  );
};

export default CheckboxField;
