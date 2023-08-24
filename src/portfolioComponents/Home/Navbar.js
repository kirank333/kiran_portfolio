import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-bar-container">
      <input type="checkbox" id="isChecked" />
      <label htmlFor="isChecked" className="menu-button">
        <i className="fa-solid fa-bars"> </i>{' '}
      </label>{' '}
      <label htmlFor="isChecked" className="menu-button1">
        <i className="fa-solid fa-xmark"> </i>{' '}
      </label>{' '}
      <div className="logo">
        <span className={{ '--i': '1' }}> K </span>{' '}
        <span className={{ '--i': '2' }}> I </span>{' '}
        <span className={{ '--i': '3' }}> R </span>{' '}
        <span className={{ '--i': '4' }}> A </span>{' '}
        <span className={{ '--i': '5' }}> N </span>{' '}
        <span className={{ '--i': '6' }}> &nbsp; </span>{' '}
        <span className={{ '--i': '7' }}>
          <div className="color-text"> K </div>{' '}
        </span>{' '}
      </div>{' '}
      <ul className="nav-links">
        <li>
          <a href="#home"> Home </a>{' '}
        </li>{' '}
        <li>
          <a href="#aboutme"> About Me </a>{' '}
        </li>{' '}
        <li>
          <a href="#resume"> Resume </a>{' '}
        </li>{' '}
        <li>
          <a href="#achievements"> Projects Demo </a>{' '}
        </li>{' '}
        <li>
          <a href="#contactme"> Contact Me </a>{' '}
        </li>{' '}
      </ul>{' '}
    </div>
  );
}
