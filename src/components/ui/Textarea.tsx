'use client';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  defaultValue?: string;
};

export function Textarea({
  name,
  label,
  placeholder,
  rows = 5,
  required = false,
  defaultValue,
}: Props) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
      />
    </div>
  );
}
