function ContactBtn({ message, fontClass }) {
    return (
        <span
        className={`w-fit rounded-tr-lg rounded-bl-lg flex items-center justify-center
        text-white bg-black cursor-pointer
        dark:border-1 dark:border-fuchsia-900
        hover:bg-fuchsia-600 dark:hover:bg-black
        dark:hover:drop-shadow-[0_0_15px_rgba(252,27,251,0.5)]
        ${fontClass}`}
        >
        {message}
        </span>
    );
}

export default ContactBtn;