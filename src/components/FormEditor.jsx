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

import TextField from './FieldList/TextField';
import CheckboxField from './FieldList/CheckboxField';
import ParagraphField from './FieldList/ParagraphField';
import SelectField from './FieldList/SelectField';
import RadioField from './FieldList/RadioField';
import FieldCard from './FieldCard';

const SortableFieldWrapper = ({ field, onDelete, children }) => {
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

      {children}
    </div>
  );
};

const FormEditor = ({ collection, onUpdate, onDelete, onReorder }) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = collection.findIndex((f) => f.id === active.id);
    const newIndex = collection.findIndex((f) => f.id === over.id);
    const reordered = arrayMove(collection, oldIndex, newIndex);
    onReorder(reordered);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={collection.map((f) => f.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4 px-4">
          {collection.map((field) => {
            let FieldComponent;
            switch (field.type) {
              case 'text':
                FieldComponent = TextField;
                break;
              case 'checkbox':
                FieldComponent = CheckboxField;
                break;
              case 'paragraph':
                FieldComponent = ParagraphField;
                break;
              case 'radio':
                FieldComponent = RadioField;
                break;
              case 'select':
                FieldComponent = SelectField;
                break;
              default:
                return null;
            }

            return (
              <FieldCard key={field.id} field={field} onDelete={onDelete}>
                <FieldComponent field={field} onUpdate={onUpdate} />
              </FieldCard>
            );
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default FormEditor;
