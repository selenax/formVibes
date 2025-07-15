import TextField from './FieldList/TextField';
import CheckboxField from './FieldList/CheckboxField';
import ParagraphField from './FieldList/ParagraphField';
import SelectField from './FieldList/SelectField';

const FormEditor = ({ collection, onUpdate }) => {
  return (
    <div className="space-y-4">
      {collection.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <TextField key={field.id} field={field} onUpdate={onUpdate} />
            );
          case 'checkbox':
            return (
              <CheckboxField key={field.id} field={field} onUpdate={onUpdate} />
            );
          case 'paragraph':
            return <ParagraphField key={field.id} field={field} />;
          case 'select':
            return <SelectField key={field.id} field={field} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FormEditor;
