import React from 'react';
import logo from '../../../assets/Logo/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-800 text-primary-content">
            <div>
                <img src={logo} className="w-20" alt="" />
                <p className="font-semibold text-lg">
                    Iqra Laptop Zone <br />Providing reliable products since 2007
                </p>
                <p>Copyright © 2022 - All right reserved by Iqra Laptop Zone</p>
            </div>
        </footer>
    );
};

export default Footer;