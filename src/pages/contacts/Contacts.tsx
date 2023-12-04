import MainContacts from "./components/MainContacts";

export default function Contacts() {
    return (
        <section className="contacts text-white pt-[60px]">
            <div className="container mx-auto px-5 lg:px-0 lg:w-4/5 3xl:w-2/3 space-y-16 py-16">
                <MainContacts />
            </div>
        </section>
    );
}
