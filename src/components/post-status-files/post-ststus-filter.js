import React from "react";
import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn-searth searth-all"> Все </button>
            <button className="btn-searth searth-like"> Понравилось  </button>

        </div>
    )
}
export default  PostStatusFilter