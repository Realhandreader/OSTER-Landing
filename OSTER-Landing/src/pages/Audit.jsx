import comingsoon from "../assets/img/logo/coming-soon.png";

function Audit() {
return (
        <>
        <div className="section-container first-section-spacing relative">
            <h1 className="title-settings">Coming soon</h1>
            
                <img 
                    src={comingsoon} 
                    alt="Coming Soon"
                    className="absolute right-0 bottom-0 w-160 opacity-20 "/>
            
        </div>
        
        
        </>
    )
}

export default Audit;
