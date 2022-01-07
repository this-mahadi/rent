import React from 'react';
import {MdAccountCircle} from 'react-icons/md'
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className={'bg-rose-200 p-1 flex justify-around text-blue-900 font-sans font-medium'}>
            <div className={'flex gap-10 items-center'}>
                <Link to="/" className={'text-4xl text-black font-serif font-semibold'}>বাসা ভাড়া</Link>
                <div className={'flex gap-3'}>
                    <Link to="/rent">RENT</Link>
                    <Link to="/post">POST</Link>
                </div>
            </div>

            <div className={'flex items-center gap-2'}>
                <Link to="/premium">PREMIUM</Link>
                <Link to="/signin"><MdAccountCircle size={'25px'} color={'black'}/></Link>
            </div>
        </div>
    );
}

export default Nav;