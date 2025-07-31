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
            className="w-[163px] flex items-center gap-2 
           px-4 py-3 rounded-2xl 
           bg-yellow-100 border border-yellow-200 
           text-gray-800 font-semibold font-rounded 
           hover:bg-yellow-200 transition-transform hover:scale-110 group"
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
