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
import DropdownField from './FieldList/DropdownField';
import RadioField from './FieldList/RadioField';
import FieldCard from './FieldCard';

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
              case 'email':
              case 'tel':
              case 'date':
              case 'number':
                FieldComponent = TextField;
                break;
              case 'textarea':
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
                FieldComponent = DropdownField;
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
