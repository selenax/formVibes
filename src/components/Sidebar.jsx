function Sidebar() {
  return (
    <div>
      <p className="text-gray-600">Select Fields</p>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => console.log('testing')} className="btn-primary">
          Text
        </button>
        <button className="btn-primary">Paragraph</button>
        <button className="btn-primary">Checkbox</button>
        <button className="btn-primary">Select</button>
      </div>
    </div>
  );
}

export default Sidebar;
