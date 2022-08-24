import React from "react";

export default function Navbar({showForm, setShowForm}) {
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">MoneyApp Blogs </a>
                <button className="navbar-brand btn btn-link" onClick={()=>setShowForm(!showForm)}> {showForm ? 'Reset' : 'Post new blog'}</button>
            </div>
        </nav>
    )
}