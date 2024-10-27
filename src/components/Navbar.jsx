import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full navbar navbar-expand-lg  bg-opacity-90 shadow-lg'>
      <div className="container-fluid flex justify-between items-center">
        <a className="text-white navbar-brand ml-2 pl-3 fw-bolder text-4xl font-bold">
          infused
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="" id="navbarNav">
          <ul className="flex space-x-8 navbar-nav fw-bolder p-2 text-black">
            <li className="hover:text-blue-600 nav-item no-underline navbar-link">
              <a className="nav-link" href="/">Uses</a>
            </li>
            <li className="hover:text-blue-600 nav-item no-underline navbar-link">
              <a className="nav-link" href="/">Infusions</a>
            </li>
            <li className="hover:text-blue-600 nav-item no-underline navbar-link">
              <a className="nav-link" href="/">Location</a>
            </li>
            <li className="hover:text-blue-600 nav-item no-underline navbar-link">
              <a className="nav-link" href="/">About us</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="/" className="bg-white text-blue-500 border-3 no-underline mr-20 py-2 px-4 rounded-full">
            Book an Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
