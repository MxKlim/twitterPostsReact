import React from "react";
import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="O чем вы думаете?"
                className="form-control new-post-lebel"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={(e) =>{onAdd(e,'hello')}}
            >
                Добавить
            </button>
        </form>
    )
}
export default PostAddForm