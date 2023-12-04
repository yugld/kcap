interface FormActionProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    type?: string;
    action?: "submit" | "button";
    text: string;
}

const FormAction: React.FC<FormActionProps> = ({
    handleSubmit,
    type = "Button",
    action = "submit",
    text,
}) => {
    return (
        <>
            {type === "Button" && (
                <button
                    type={action}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-background hover:border-primary hover:text-primary focus:outline-none focus:ring focus:ring-primary focus:ring-offset focus:border-primary mt-10"
                >
                    {text}
                </button>
            )}
        </>
    );
};

export default FormAction;
