export interface InputProps {
  id: string;
  name: string;
  min: number;
  step: number;
  label: string;
  placeholder?: string;
  register?: any;
  className?: string;
}

export default function Input({
  id,
  name,
  label,
  min,
  step,
  placeholder,
  register,
  className,
}: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="number"
        id={id}
        min={min}
        step={step}
        placeholder={placeholder}
        className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tabular-nums"
        {...register(name)}
      />
    </div>
  );
}
