'use client';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
};

export function Input({ name, label, placeholder, required = false, defaultValue }: Props) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
