const ParagraphField = ({ field, onUpdate }) => {
  return (
    <div className="p-4 border rounded space-y-2">
      {/* Label editor */}
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

      {/* Placeholder editor */}
      <input
        type="text"
        value={field.placeholder || ''}
        onChange={(e) => onUpdate(field.id, { placeholder: e.target.value })}
        className="text-sm text-gray-600 border px-2 py-1 rounded w-full"
        placeholder="Placeholder text (optional)"
      />

      {/* Max character limit */}
      <input
        type="number"
        min={1}
        value={field.maxLength || ''}
        onChange={(e) =>
          onUpdate(field.id, { maxLength: Number(e.target.value) })
        }
        className="text-sm text-gray-600 border px-2 py-1 rounded w-full"
        placeholder="Max characters (optional)"
      />

      {/* Textarea preview */}
      <textarea
        placeholder={field.placeholder || 'Enter multi-line text...'}
        maxLength={field.maxLength}
        className="w-full border rounded px-2 py-1 resize-y"
        rows={4}
        readOnly
      />
    </div>
  );
};

export default ParagraphField;
