import { useState } from 'react';

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
    <div className="space-y-4">
      <textarea
        className="w-full border rounded p-2"
        placeholder="Describe your form (e.g. RSVP with name, email, attendance)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerate} className="btn btn-primary">
        Generate Form
      </button>
    </div>
  );
}

export default AIGeneratorLite;
