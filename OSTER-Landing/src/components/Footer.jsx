import { links } from "../data/Links";
import { NavLink } from "react-router-dom";
import logodark from '../assets/img/logodark.png';
import logolight from '../assets/img/logolight.png';
import Socials from "../data/Socials";

function Footer ({ theme }) {
    const mainLinks = links.filter(link => !link.dropdown && link.id !== "home");
    const linksWithDropdowns = links.filter(
        link => link.dropdown && link.dropdown.length > 0);
    const allDropdowns = linksWithDropdowns.map(
        link => link.dropdown.map (
            item => ({id: item.id, name: item.name, parentId: link.id})
        )
    );
    const dropdownItems = allDropdowns.flat();

    const email = Socials.find(item => item.id === "email");
    const messengers = Socials.filter(
        item => item.id === "telegram" || item.id === "whatsapp"
    );

    return (
        <div className="w-full bg-slate-50 dark:bg-zinc-950 ">
            <footer className="related section-spacing h-auto mx-auto flex flex-col items-center justify-center
                max-w-[320px] p-[20px] gap-[20px]
                sm:max-w-[640px] sm:p-[30px] sm:gap-[30px]
                md:max-w-[768px] 
                lg:max-w-[1024px] lg:p-[40px] lg:gap-[40px]
                xl:max-w-[1280px] xl:p-[50px] xl:gap-[50px]
                2xl:max-w-[1536px] 2xl:p-[60px] 2xl:gap-[20px]"
            >

                {/* Context */}
                <div className="flex flex-col w-full justify-between sm:flex-row text-center sm:text-left items-start">
                    
                    {/* Logo */}
                    <div className="hidden sm:flex">
                        <NavLink to="/">
                            <img
                                src={logolight}
                                alt="OSTER-Tech"
                                className="h-10 xl:h-16 2xl:h-20 dark:hidden"
                            />
                            <img
                                src={logodark}
                                alt="OSTER-Tech"
                                className="h-10 xl:h-16 2xl:h-20 hidden dark:block"
                            />
                        </NavLink>
                    </div>

                    {/* Links to Main Categories */}
                    <div className="flex flex-col">
                        <h4 className="mb-4 text-xl font-semibold">
                            Quick links
                        </h4>
                        <div className="flex flex-row sm:flex-col flex-wrap justify-center">
                            {mainLinks.map((link, index) =>
                                !link.dropdown && link.id !== "home" ? (
                                    <div 
                                        key={link.id}
                                        className="mb-1 dark:hover:text-white dark:hover:drop-shadow-[0_0_0px_#22d3ee,0_0_0px_#22d3ee,0_0_10px_#22d3ee] hover:text-slate-500">
                                            <NavLink
                                                key={link.id}
                                                to={`/${link.id}`}
                                            >
                                                {link.name}
                                            </NavLink>
                                                {index < mainLinks.length - 1 && (
                                                    <span className="mx-2 sm:hidden">
                                                        •
                                                    </span>
                                                )}
                                    </div>
                                ) : (null)
                            )}
                        </div>
                    </div>

                    <hr className="block sm:hidden border-t my-2 border-black/10  dark:border-white/10 w-full" />

                    {/* Links to Subdomains */}
                    <div className="flex flex-col">
                        <h4 className="mb-4 text-xl font-semibold">
                            Services
                        </h4>
                        <div className="flex flex-row sm:flex-col flex-wrap justify-center ">
                            {dropdownItems.map((item, index) =>
                                <div key={`${item.parentId}-${item.id}`}
                                    className="mb-1 dark:hover:text-white dark:hover:drop-shadow-[0_0_0px_#22d3ee,0_0_0px_#22d3ee,0_0_10px_#22d3ee] hover:text-slate-500">
                                    <NavLink
                                        to={`/${item.parentId}`}>
                                        {item.name}
                                    </NavLink>
                                    {index < dropdownItems.length - 1 && (
                                            <span className="mx-2 sm:hidden">
                                                •
                                            </span>
                                        )}
                                </div>)}
                        </div>
                    </div>

                    <hr className="block sm:hidden border-t my-2 border-black/10 dark:border-white/10 w-full"/>

                    {/* Contacts */}
                    <div className="flex flex-col">
                        <h4 className="mb-4 text-xl font-semibold">
                            Contacts
                        </h4>
                        <ul>
                            {/* EMAIL */}
                            <li className="mb-5
                                hover:text-slate-500
                                dark:hover:text-white
                                dark:hover:drop-shadow-[0_0_0px_#22d3ee,0_0_0px_#22d3ee,0_0_10px_#22d3ee]">
                                <a
                                    href={email.href}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <email.Icon className="w-4 h-4" />
                                    <span>webdevelopment@oster-tech.com</span>
                                </a>
                            </li>

                            {/* TELEGRAM + WHATSAPP */}
                            <li className="flex flex-row gap-5">
                                {messengers.map(({ id, href, Icon }) => (
                                <a
                                    key={id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={id}
                                >
                                    <Icon
                                    className="w-10 h-10
                                    hover:text-fuchsia-600
                                    dark:hover:text-white
                                    dark:hover:drop-shadow-[0_0_0px_#22d3ee,0_0_0px_#22d3ee,0_0_10px_#22d3ee]"
                                    />
                                </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
                

            </footer>

            {/* Bottom bar */}
                <div className="mx-auto 
                    max-w-[320px]  
                    sm:max-w-[640px]  
                    md:max-w-[768px] 
                    lg:max-w-[1024px]  
                    xl:max-w-[1280px]  
                    2xl:max-w-[1536px] ">

                    {/* Line */}
                    <hr className="border-t border-black/10 dark:border-white/10"/>

                    {/* Copyright */}
                    <div className="flex justify-center items-center text-sm gap-2  text-gray-500
                        p-[10px]
                        sm:p-[15px]
                        lg:p-[20px]
                        xl:p-[25px]
                        2xl:p-[30px]"
                    >
                        <span>
                            © 2025 
                            {new Date().getFullYear() > 2025 && ` - ${new Date().getFullYear()}`}
                        </span>
                        <span className="gap-2 w-1 h-1 rounded-full bg-gray-500 inline-block"/>
                        <span>
                            OSTER Tech
                        </span>
                    </div>
                </div>
            
        </div>
    )
}

export default Footer