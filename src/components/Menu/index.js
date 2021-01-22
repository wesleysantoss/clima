import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <Link to="/">
                    <a class="nav-link" href="#">Home</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/sobre">
                    <a class="nav-link" href="#">Sobre</a>
                </Link>
            </li>
        </ul>
    )
}