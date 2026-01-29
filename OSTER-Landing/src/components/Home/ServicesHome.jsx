import ServicesTimeline from "../ServicesTimeline";

function ServicesHome () {
    return (
        <>
            <section className="services-home">
                <div className="section-container-large section-spacing"> 
                    <div className="title-settings">
                        Our Services
                    </div>
                    <ServicesTimeline />
                </div>               
            </section>  

        </>
    )
}

export default ServicesHome;