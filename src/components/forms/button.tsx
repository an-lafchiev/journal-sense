interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  text: string;
}

export function Button({ text, type = "button", icon, ...props }: ButtonProps) {
  return (
    <div className="flex justify-end">
      <button
        type={type}
        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors cursor-pointer"
        {...props}
      >
        {icon && icon}
        <span>{text}</span>
      </button>
    </div>
  );
}
