// fieldTypes.js
import {
  Text,
  TypeOutline,
  CheckSquare,
  CircleCheck,
  ChevronDown,
} from 'lucide-react';

export const FieldTypes = [
  {
    type: 'text',
    label: 'Short answer',
    icon: TypeOutline,
  },
  {
    type: 'paragraph',
    label: 'Paragraph',
    icon: Text,
  },
  {
    type: 'checkbox',
    label: 'Checkboxes',
    icon: CheckSquare,
  },
  {
    type: 'radio',
    label: 'Multiple choice',
    icon: CircleCheck,
  },
  {
    type: 'select',
    label: 'Dropdown',
    icon: ChevronDown,
  },
];
