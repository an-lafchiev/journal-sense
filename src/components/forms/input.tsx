interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export function InputField({
  label,
  id,
  placeholder,
  labelProps,
  type = "text",
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
        {...labelProps}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent user-invalid:border-red-500"
        {...props}
      />
    </div>
  );
}
