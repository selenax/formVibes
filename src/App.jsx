import { useState } from 'react';
import Sidebar from './components/Sidebar';
import FormEditor from './components/FormEditor';
import AIGeneratorLite from './components/AIGeneratorLite';

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
    <div className="min-h-screen bg-white">
      <div className="max-w-[900px] mx-auto py-10">
        <div className="flex justify-center px-2 sm:px-4 gap-2">
          {/* Sidebar Column */}
          <div className="w-full md:w-1/3 lg:w-1/4 sticky top-10 self-start z-30">
            <Sidebar onAddField={handleClickField} />
          </div>

          <div className="flex-grow">
            <AIGeneratorLite
              onGenerate={(fields) =>
                setCollection((prev) => [
                  ...prev,
                  ...fields.map((field) => ({
                    id: crypto.randomUUID(),
                    ...field,
                  })),
                ])
              }
            />
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
