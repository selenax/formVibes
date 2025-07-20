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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1000px] mx-auto p-6 bg-white shadow-sm rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Column */}
          <div className="w-full md:w-[220px] flex-shrink-0 sticky top-10 self-start max-h-[90vh] overflow-auto">
            <Sidebar onAddField={handleClickField} />
          </div>

          {/* Form Editor Column */}
          <div className="flex-1">
            <FormEditor
              collection={collection}
              onToggleRequired={toggleRequired}
              onUpdate={updateField}
              onDelete={handleDeleteField}
              onReorder={handleReorderFields}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
