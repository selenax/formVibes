function Sidebar({ onAddField }) {
  return (
    <div>
      <p className="text-gray-600">Select Fields</p>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => onAddField('text')} className="btn-primary">
          Text
        </button>
        <button onClick={() => onAddField('paragraph')} className="btn-primary">
          Paragraph
        </button>
        <button onClick={() => onAddField('checkbox')} className="btn-primary">
          Checkbox
        </button>
        <button onClick={() => onAddField('select')} className="btn-primary">
          Select
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
