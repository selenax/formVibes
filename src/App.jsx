import { useState } from 'react';
import Sidebar from './components/Sidebar';
import FormEditor from './components/FormEditor';

const App = () => {
  const [collection, setCollection] = useState([]);

  const handleClickField = (type) => {
    let newField = {
      id: crypto.randomUUID(),
      type,
      label: 'Untitled',
      required: false,
    };

    if (['checkbox', 'radio'].includes(type)) {
      newField.options = ['Option 1', 'Option 2'];
    }
    if (type === 'select') {
      newField.options = ['Option A', 'Option B'];
    }

    setCollection((prev) => [...prev, newField]);
  };

  const toggleRequired = (id) => {
    setCollection((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, required: !field.required } : field
      )
    );
  };

  const updateField = (id, updates) => {
    setCollection((prev) =>
      prev.map((field) => (field.id === id ? { ...field, ...updates } : field))
    );
  };

  const handleDeleteField = (id) => {
    setCollection((prev) => prev.filter((field) => field.id !== id));
  };

  const handleReorderFields = (newOrder) => {
    setCollection(newOrder);
  };

  return (
    <div className="min-h-screen bg-white flex px-6 py-10">
      {/* Fixed Sidebar */}
      <div className="hidden md:block fixed top-10 left-6 w-64 h-[90vh] overflow-auto bg-white shadow z-30 p-4 rounded-md">
        <Sidebar onAddField={handleClickField} />
      </div>

      {/* Spacer for Sidebar */}
      <div className="w-0 md:w-64" />

      {/* Main Content */}
      <div className="flex-1 max-w-[1000px] mx-auto">
        <FormEditor
          collection={collection}
          onToggleRequired={toggleRequired}
          onUpdate={updateField}
          onDelete={handleDeleteField}
          onReorder={handleReorderFields}
        />
      </div>
    </div>
  );
};

export default App;
