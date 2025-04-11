interface TextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  placeholder: string;
  rows?: number;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export function TextAreaField({
  label,
  id,
  placeholder,
  rows = 12,
  labelProps,
  ...props
}: TextAreaFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
        {...labelProps}
      >
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md user-invalid:border-red-500  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
        {...props}
      />
    </div>
  );
}
