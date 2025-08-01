import React from 'react';

const PreviewPage = ({ formData, onBackToEdit }) => {
  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            type={field.type}
            placeholder={field.label}
            disabled
            required={field.required}
            className="w-full p-2 mt-1 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
          />
        );

      case 'textarea':
        return (
          <textarea
            placeholder={field.label}
            disabled
            required={field.required}
            className="w-full p-2 mt-1 border border-gray-300 rounded bg-gray-100 cursor-not-allowed resize-none"
            rows={4}
          />
        );

      case 'radio':
        return (
          <div className="mt-1 space-x-4">
            {field.options.map((option, i) => (
              <label
                key={i}
                className="inline-flex items-center space-x-1 cursor-not-allowed"
              >
                <input
                  type="radio"
                  disabled
                  name={`field-${field.id}`}
                  className="cursor-not-allowed"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="mt-1 space-x-4">
            {field.options.map((option, i) => (
              <label
                key={i}
                className="inline-flex items-center space-x-1 cursor-not-allowed"
              >
                <input
                  type="checkbox"
                  disabled
                  name={`field-${field.id}-${i}`}
                  className="cursor-not-allowed"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );

      default:
        return (
          <p className="text-red-500">Unsupported field type: {field.type}</p>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md font-sans">
      <h1 className="text-3xl font-bold mb-2">
        {formData.title || 'Untitled Form'}
      </h1>
      <p className="text-gray-600 mb-6">{formData.description}</p>

      <form>
        {formData.fields.map((field) => (
          <div key={field.id} className="mb-6">
            <label className="block font-semibold mb-1">
              {field.label}{' '}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            {renderField(field)}
          </div>
        ))}

        <button
          type="submit"
          disabled
          className="w-full py-3 bg-gray-400 text-white font-semibold rounded cursor-not-allowed"
        >
          Submit (Preview)
        </button>
      </form>

      {onBackToEdit && (
        <button
          onClick={onBackToEdit}
          className="mt-6 w-full py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          Back to Edit
        </button>
      )}
    </div>
  );
};

export default PreviewPage;
