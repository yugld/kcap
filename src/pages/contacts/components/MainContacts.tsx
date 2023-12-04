import FormContacts from "./FormContacts";
import { contactLinks } from "./dataContacts";

export default function MainContacts() {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-12 lg:gap-16">
            <div className="headline flex flex-col justify-center gap-6 w-full lg:w-2/3">
                <h2 className="text-lg leading-snug font-bold italic"></h2>
                <span className="text-xl leading-snug font-bold italic">
                    Контакты
                </span>
                <div className="flex flex-col space-y-4">
                    <p>
                        Для того чтобы обсудить наш следующий коммерческий
                        проект в сфере металлургии и продажи медесодержащей
                        продукции, пожалуйста, заполните предоставленную форму.
                        Мы с нетерпением ждем возможности сотрудничества с вами!
                    </p>
                    {contactLinks.map(({ title, path, name, id }) => (
                        <ul className="space-y-4">
                            <li key={id} className="">
                                <p className="font-medium">{title}</p>
                                <a
                                    href={path}
                                    className="transition hover:opacity-75 text-gray-200"
                                >
                                    {name}
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <FormContacts />
        </div>
    );
}
