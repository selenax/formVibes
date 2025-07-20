import OptionEditor from './OptionEditor';

const CheckboxField = ({ field, onUpdate }) => {
  return (
    <div className="p-4 border rounded space-y-2">
      {/* Field label */}
      <input
        type="text"
        value={field.label}
        onChange={(e) => onUpdate(field.id, { label: e.target.value })}
        className="text-sm font-medium text-gray-700 border px-2 py-1 rounded w-full"
        placeholder="Field label"
      />

      {/* Required toggle */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => onUpdate(field.id, { required: e.target.checked })}
        />
        <label className="text-sm text-gray-600">Required</label>
      </div>

      {/* Option editor */}
      <OptionEditor
        options={field.options}
        onChange={(opts) => onUpdate(field.id, { options: opts })}
      />

      {/* Preview */}
      {(field.options || []).map((option, index) => (
        <div key={`preview-${index}`} className="flex items-center space-x-2">
          <input type="checkbox" disabled />
          <label className="text-sm text-gray-500">
            {option || `Option ${index + 1}`}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxField;
