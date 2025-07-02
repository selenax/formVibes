import { useState } from 'react';
import Sidebar from './components/Sidebar';
import FormEditor from './components/FormEditor';

function App() {
  const [collection, setCollection] = useState([]);

  // handler: create and add a new form field to collection
  const handleClickField = (type) => {
    // form schema
    const newField = {
      id: crypto.randomUUID(), // unique identifier for field
      type, // field type: 'text','checkbox','paragraph','select'
      label: 'Untitled', // default label
      required: false, // default required status
    };
    // adds to collection
    setCollection((prev) => [...prev, newField]);
    console.log('Added:', newField);
  };

  return (
    <div>
      <div className="flex justify-center p-10">
        <div className="w-full max-w-5xl flex gap-4">
          <div className="w-1/3">
            <Sidebar onClick={handleClickField} />
          </div>
          <div className="w-2/3">
            <FormEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
