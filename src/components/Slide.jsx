function Slide() {

    const scrollTo = (e) => {
        const imgWidth = document.querySelector(".slider").firstChild.offsetWidth;

        const a = e.currentTarget;
        const n = Number(a.id.replace("slider-nav-", ""));
        const slider = document.querySelector(".slider");
        slider.scrollTo(imgWidth * ( n - 1), 0)
    }
    return (
        <div className="slider-wrapper">
            <div className="slider">
                <img 
                src="https://images.unsplash.com/photo-1535438414045-70dbc0464d5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Red flower growing">
                </img>
                <img 
                src="https://images.unsplash.com/photo-1530242269066-86e5a3a480ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Plant seeds growing">  
                </img>
                <img 
                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Daisy flower image"
                ></img>
            </div>
            <div className="slider-nav">
                <a id="slider-nav-1" onClick={scrollTo}></a>
                <a id="slider-nav-2" onClick={scrollTo}></a>
                <a id="slider-nav-3" onClick={scrollTo}></a>
            </div>
        </div>
    )
}

export default Slide;