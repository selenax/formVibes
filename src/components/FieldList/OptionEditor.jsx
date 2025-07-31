import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

const SortableItem = ({ id, value, onChange, onRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex border-white items-center space-x-2 mb-1"
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab px-2 text-gray-400"
        title="Drag to reorder"
      >
        ☰
      </div>

      {/* Option input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm text-gray-600 border px-2 py-1 rounded w-full"
        placeholder="Option label"
      />

      {/* Remove option button */}
      <button onClick={onRemove} className="text-red-500 text-sm">
        ✕
      </button>
    </div>
  );
};

const OptionEditor = ({ options, onChange }) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = options.findIndex((opt, i) => `${i}` === active.id);
      const newIndex = options.findIndex((opt, i) => `${i}` === over.id);
      const reordered = arrayMove(options, oldIndex, newIndex);
      onChange(reordered);
    }
  };

  const updateOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    onChange(updated);
  };

  const addOption = () => onChange([...options, '']);
  const removeOption = (index) => {
    const updated = [...options];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={options.map((_, i) => `${i}`)}
          strategy={verticalListSortingStrategy}
        >
          {options.map((option, index) => (
            <SortableItem
              key={index}
              id={`${index}`}
              value={option}
              onChange={(val) => updateOption(index, val)}
              onRemove={() => removeOption(index)}
            />
          ))}
        </SortableContext>
      </DndContext>

      <button
        onClick={addOption}
        className="text-sm text-blue-500 hover:underline mt-1"
      >
        + Add Option
      </button>
    </>
  );
};

export default OptionEditor;
