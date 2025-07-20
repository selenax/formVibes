const Sidebar = ({ onAddField }) => {
  const fieldTypes = ['text', 'paragraph', 'checkbox', 'radio', 'select'];

  return (
    <div className="pb-6">
      <p className="text-gray-600 mb-4">Select Fields</p>
      <div className="flex flex-col gap-3 items-start">
        {fieldTypes.map((type) => (
          <button
            key={type}
            onClick={() => onAddField(type)}
            className="btn-primary w-[140px] text-center text-base px-3 py-2"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
