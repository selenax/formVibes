import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const FieldCard = ({ field, onDelete, children }) => {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="relative pt-6 px-6">
      <div
        ref={setNodeRef}
        style={style}
        className="relative border border-gray-300 rounded-lg bg-white shadow-sm pt-6 px-4 pb-4 pl-6"
      >
        {/* Delete button (outside top-right) */}
        <button
          onClick={() => onDelete(field.id)}
          className="absolute -top-1 -right-1 text-red-500 text-lg font-bold transition-transform duration-200 ease-out hover:scale-150 hover:text-xl active:scale-125 z-10 px-2 py-1"
          title="Delete field"
        >
          ✕
        </button>
        {/* Drag handle */}
        <div
          {...attributes}
          {...listeners}
          className="absolute -left-10 top-1/2 -translate-y-1/2 text-gray-300 text-3xl cursor-grab transition-transform duration-200 ease-out hover:scale-150 active:scale-125"
          title="Drag to reorder"
        >
          ☰
        </div>

        {/* Field content */}
        {children}
      </div>
    </div>
  );
};

export default FieldCard;
