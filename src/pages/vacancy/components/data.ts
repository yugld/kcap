import { IField } from "./types";

export const fields: IField[] = [
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
