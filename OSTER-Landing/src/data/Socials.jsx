import TelegramIcon from "../components/ui/TelegramIcon"
import WatsappIcon from "../components/ui/WatsappIcon";
import { Mail, Phone } from "lucide-react";

const Socials = [
    {
        id: "telegram",
        href: "https://t.me/oster_tech",
        Icon: TelegramIcon,
        label: "Telegram"
    },
    {
        id: "whatsapp",
        href: "https://wa.me/380671803086",
        Icon: WatsappIcon,
        label: "whatsapp"
    },
    {
        id: "phone",
        href: "tel:+380671803086",
        Icon: Phone,
        label: "Phone"
    },
    {
        id: "email",
        href: "mailto:webdevelopment@oster-tech.com",
        Icon: Mail,
        label: "E-Mail"
    },
];

export default Socials;