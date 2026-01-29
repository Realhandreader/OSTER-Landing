import { servicesData } from "../data/ServicesData";

function ServicesTimeline() {
    return (
        <div className="services-timeline relative justify-center w-full mx-auto">

            {/* LINE */}
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray-700"></div>

            <div className="flex flex-col gap-28 ">

                {servicesData.map((service, index) => {
                    const isRight = index % 2 === 0;

                    return (
                        <div 
                            key={service.id}
                            className={`relative flex flex-row items-center`}
                        >
                            {/* TITLE BLOCK */}
                            <div
                                className={`
                                    w-1/6 p-6 
                                    ${isRight ? "" : "order-2 "}
                                `}
                            >
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                            </div>

                            {/* DOT */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border border-gray-500"></div>

                            {/* DESCRIPTION BLOCK */}
                            <div
                                className={`
                                    w-1/4 p-6 rounded-md
                                    border border-slate-300 dark:border-cyan-950 shadow-lg
                                    ${isRight ? "order-2 " : ""}
                                `}
                            >
                                <p className="text-gray-300">{service.description}</p>
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default ServicesTimeline;