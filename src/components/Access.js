import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Acces = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [name, setName] = useState("");

    const submit = e => {
        e.preventDefault()
        dispatch({ type: "GET_NAME", payload: name })
        navigate("/pokedex")
    }

    return (
        <section className="Home">
            <div className="Logo-pokemon"></div>
            <form onSubmit={submit}>
                <label>
                    <span><b>Enter your name to get started:</b></span>
                    <div className="Form-name-container">
                        <div className="Img-acces"></div>
                        <input type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                </label>
                <button>Start</button>
            </form>
        </section>
    )
}

export default Acces;