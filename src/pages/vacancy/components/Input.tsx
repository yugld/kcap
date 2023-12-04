interface IInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    isRequired?: boolean;
    placeholder: string;
    customClass?: string;
}

const fixedInputClass =
    "rounded-md appearance-none relative block w-full px-3 py-2 text-white bg-background border border-gray-300 placeholder-white focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm";

const Input: React.FC<IInputProps> = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass = "",
}) => {
    return (
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
