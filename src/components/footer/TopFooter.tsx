import { Instagram, WhatsApp } from "@mui/icons-material";
import { footerLinks } from "./dataFooter";

export default function TopFooter() {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 pb-8 border-b border-gray-400">
            <div className="">
                <div className="">KCAP</div>
                <p className="mt-4 max-w-xs">Kazakhstan copper alloys plant</p>

                <ul className="mt-8 flex gap-6">
                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            className="transition hover:opacity-75 hover:text-primary text-gray-200"
                        >
                            <span className="sr-only">Instagram</span>
                            <Instagram />
                        </a>
                    </li>

                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            className="transition hover:opacity-75 text-gray-200 hover:text-primary"
                        >
                            <span className="sr-only">WhatsApp</span>
                            <WhatsApp />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
                {footerLinks.map((links) => (
                    <div
                        key={links.id}
                        className={links.id === 1 ? "" : "w-1/2"}
                    >
                        <p className="font-medium">{links.title}</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            {links.subtitles.map(({ path, name, id }) => (
                                <li key={id} className="">
                                    <a
                                        href={path}
                                        className="transition hover:opacity-75 text-gray-200"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
