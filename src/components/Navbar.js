import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Chat App
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                    exact
                >Главная страница
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/about"
                >Что я использовал и релизовал 
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/slider-page"
                >Слайдер
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/redux-page"
                >Redux Теория
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/redux-practice"
                >Redux Практика (!!! Нужно обновить страницу, чтоб заработало !!!)
                </NavLink>
            </li>
        </ul>

    </nav>
)
