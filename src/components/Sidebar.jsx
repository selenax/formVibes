function Sidebar() {
  return (
    <div>
      <p className="text-gray-600">Select Fields</p>
      <div className="grid grid-cols-2 gap-4">
        <button>Text</button>
        <button>Paragraph</button>

        <button>Checkbox</button>
        <button>Select</button>
      </div>
    </div>
  );
}

export default Sidebar;
