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
    <div
      ref={setNodeRef}
      style={style}
      className="relative border rounded bg-white shadow pt-6 px-4 pb-4"
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-1 left-2 text-gray-400 cursor-grab"
        title="Drag to reorder"
      >
        ☰
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(field.id)}
        className="absolute top-1 right-2 text-red-500 text-sm"
      >
        ✕
      </button>

      {/* Field content */}
      {children}
    </div>
  );
};

export default FieldCard;
