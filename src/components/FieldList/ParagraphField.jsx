const ParagraphField = ({ field, onUpdate }) => {
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
      <input
        type="text"
        value={field.placeholder || ''}
        onChange={(e) => onUpdate(field.id, { placeholder: e.target.value })}
        className="text-sm text-gray-600 border px-2 py-1 rounded w-full"
        placeholder="Placeholder text (optional)"
      />
      <textarea
        placeholder={field.placeholder || 'Enter multi-line text...'}
        className="w-full border rounded px-2 py-1"
        rows={4}
        readOnly
      />
    </div>
  );
};

export default ParagraphField;
