import { useState } from "react";
import Input from "../../../components/input/Input";
import FormAction from "../../../components/formAction/FormAction";
import { fields } from "./dataContacts";

let fieldsState: { [key: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const FormContacts: React.FC = () => {
    const [formState, setFormState] = useState(fieldsState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className="space-y-6 w-full lg:w-1/3" onSubmit={handleSubmit}>
            <div className="">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={formState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                ))}
            </div>
            <FormAction handleSubmit={handleSubmit} text="Отправить" />
        </form>
    );
};

export default FormContacts;
