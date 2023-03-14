import React from "react";
function Sidebar(props){

    let sizes = props.products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes)
        return acc;
    }, []);
    let uniqueSizes = [...new Set(sizes)]
    let {selectedSizes} = props;


    return(
        <aside className="flex-30 flex p-relative">
            <div className="side">
                {uniqueSizes.map((size) => (
                    <button 
                        className={`size ${selectedSizes.includes(size) ? 'active' : ''}`} 
                        onClick={() => props.handleClick(size)}
                        key={size}
                        >{size}
                    </button>
                ))}
            </div>
        </aside>
    )
    
}

export default Sidebar;

