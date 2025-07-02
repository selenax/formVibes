function Sidebar({ onAddField }) {
  const fieldTypes = ['text', 'paragraph', 'checkbox', 'select'];
  return (
    <div>
      <p className="text-gray-600">Select Fields</p>
      <div className="grid grid-cols-2 gap-4">
        {fieldTypes.map((type) => (
          <button
            key={type}
            onClick={() => onAddField(type)}
            className="btn-primary"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
