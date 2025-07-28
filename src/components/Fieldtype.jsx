// fieldTypes.js
import { Text, TypeOutline, CheckSquare, Dot, ChevronDown } from 'lucide-react';

export const FIELD_TYPES = [
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
    icon: Dot,
  },
  {
    type: 'select',
    label: 'Dropdown',
    icon: ChevronDown,
  },
];
