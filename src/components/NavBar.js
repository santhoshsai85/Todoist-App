import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-gray-800 py-5 px-2 flex items" style={{gap: "20px"}}>
			<div style={{color: "whitesmoke", fontSize: "20px", fontWeight: "bold"}}>TODOIST</div>
			<Link to={"/"} style={{color: "white"}}>
				Home
			</Link>
		</div>
  )
}

export default NavBar;