import { useState } from 'react';
import { Wand2 } from 'lucide-react';

function AIGeneratorLite({ onGenerate }) {
  const [prompt, setPrompt] = useState('');

  const inferFields = (input) => {
    const lower = input.toLowerCase();
    const fields = [];

    if (lower.includes('name')) fields.push({ label: 'Name', type: 'text' });
    if (lower.includes('email')) fields.push({ label: 'Email', type: 'email' });
    if (lower.includes('phone'))
      fields.push({ label: 'Phone Number', type: 'tel' });
    if (lower.includes('date')) fields.push({ label: 'Date', type: 'date' });
    if (lower.includes('rating') || lower.includes('rate'))
      fields.push({ label: 'Rating', type: 'number' });
    if (
      lower.includes('message') ||
      lower.includes('feedback') ||
      lower.includes('comments')
    ) {
      fields.push({ label: 'Feedback', type: 'textarea' });
    }

    if (fields.length === 0) {
      fields.push({ label: 'Your Input', type: 'text' });
    }

    return fields;
  };

  const handleGenerate = () => {
    const fields = inferFields(prompt);
    console.log('Generated fields:', fields);
    onGenerate(fields); // sync to parent FormEditor
  };

  return (
    <div className="flex items-start gap-4">
      <textarea
        placeholder="Describe your form (e.g. RSVP with name, email, attendance)"
        className="w-full h-[60px] p-3 border border-gray-300 rounded-2xl resize-none"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="h-[56px] flex items-center gap-2 px-4 rounded-2xl bg-white border border-yellow-400 hover:bg-yellow-100 transition-transform hover:scale-110 group"
      >
        <Wand2 className="w-6 h-6 text-yellow-500 group-hover:text-black" />
        <span className="text-sm text-gray-800 font-semibold font-rounded">
          Generate Form
        </span>
      </button>
    </div>
  );
}

export default AIGeneratorLite;
