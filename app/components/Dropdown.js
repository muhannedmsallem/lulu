// components/Dropdown.js
import Link from 'next/link';
import React from 'react';

const Dropdown = ({ title, items, onItemClick }) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-white  m-1">
        {title}
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {items && items.map((item, index) => (
          <div>
          <li  className='bg-white text-black' key={item._id}>
            <Link onClick={() => onItemClick(item.title)}>{item.title}</Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;