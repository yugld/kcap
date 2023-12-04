import Input from "./Input";

import FormAction from "./FormAction";
import { useState } from "react";

interface IField {
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type: string;
    autoComplete: string;
    isRequired: boolean;
    placeholder: string;
}

const fields: IField[] = [
    {
        labelText: "Название вакансии",
        labelFor: "vacancy",
        id: "vacancy",
        name: "vacancy",
        type: "text",
        autoComplete: "",
        isRequired: true,
        placeholder: "Название вакансии",
    },
    {
        labelText: "Имя",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Имя",
    },
    {
        labelText: "Телефон",
        labelFor: "phone",
        id: "phone",
        name: "phone",
        type: "phone",
        autoComplete: "phone",
        isRequired: true,
        placeholder: "Телефон",
    },

    {
        labelText: "Email",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email",
    },
];

let fieldsState: { [key: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const FormVacancy: React.FC = () => {
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
            <FormAction handleSubmit={handleSubmit} text="Отправить отклик" />
        </form>
    );
};

export default FormVacancy;
