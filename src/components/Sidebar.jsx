import { FieldTypes } from './FieldTypes';

const Sidebar = ({ onAddField }) => {
  const fieldTypes = ['text', 'paragraph', 'checkbox', 'radio', 'select'];

  return (
    <div className="pb-6">
      <p className="text-gray-600 mb-4">Select Fields</p>
      <div className="flex flex-col gap-3 items-start">
        {FieldTypes.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            onClick={() => onAddField(type)}
            //   className="group flex items-center gap-3 px-4 py-2 rounded-2xl hover:bg-muted cursor-pointer transition-transform hover:scale-105"
            // >
            //   {type.charAt(0).toUpperCase() + type.slice(1)}
            className="btn-primary w-[180px] flex items-center gap-2 px-3 py-2 rounded-2xl transition-transform hover:scale-105 group"
          >
            <Icon
              size={18}
              className="transition-transform group-hover:scale-125"
            />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
