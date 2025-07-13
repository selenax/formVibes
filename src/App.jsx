import { useState } from 'react';
import Sidebar from './components/Sidebar';
import FormEditor from './components/FormEditor';

const App = () => {
  const [collection, setCollection] = useState([]);

  // handler: create and add a new form field to collection
  const handleClickField = (type) => {
    // form schema
    const newField = {
      id: crypto.randomUUID(), // unique id
      type, // 'text','checkbox','paragraph','select'
      label: 'Untitled', // default label
      required: false,
    };
    // adds to collection
    setCollection((prev) => [...prev, newField]);
  };

  // updates required flag for the matching field
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

  return (
    <div>
      <div className="flex justify-center p-10">
        <div className="w-full max-w-5xl px-4 md:px-10 flex flex-wrap md:flex-nowrap gap-4">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Sidebar onAddField={handleClickField} />
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4">
            <FormEditor
              collection={collection}
              onToggleRequired={toggleRequired}
              onUpdate={updateField}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
