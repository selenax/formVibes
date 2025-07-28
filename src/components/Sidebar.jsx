import { FieldTypes } from './FieldTypes';

const Sidebar = ({ onAddField }) => {
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
            className="w-[158px] flex items-center gap-2 
             px-4 py-3 rounded-2xl bg-white border border-gray-300 
             text-black hover:bg-gray-100 transition-transform hover:scale-110 group"
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
