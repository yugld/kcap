import { IField } from "./types";

export const contactLinks = [
    {
        title: "Мы на карте",
        name: "Алматинская область, село Мухаметжан Туймебаев, Участок Промзона, здание 260",
        path: "https://go.2gis.com/wq77k5",
        id: 1,
    },
    {
        title: "Почта",
        name: "info@kcap.kz",
        path: "mailto:info@kcap.kz",
        id: 2,
    },
    {
        title: "Телефон",
        name: "+7 778 764 7807",
        path: "https://kcap.kz/contacts/tel:+77787647807",
        id: 3,
    },
];

export const fields: IField[] = [
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
    {
        labelText: "Комментарий",
        labelFor: "comment",
        id: "comment",
        name: "comment",
        type: "text",
        autoComplete: "",
        isRequired: false,
        placeholder: "Комментарий",
    },
];
