import React from "react";
import { FiChevronDown } from 'react-icons/fi';
import styles from "../styles/sidebar.module.css"
import { FaWallet } from 'react-icons/fa';

import {
    FaHome,
    FaShoppingBag,
    FaClipboardList,
    FaBullhorn,
    FaTruck,
    FaChartLine,
    FaMoneyCheckAlt,
    FaTags,
    FaUsers,
    FaPalette,
    FaPlug
  } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.topsection}>
        <div>
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div>
          <p>Nishyan</p>
          <p>Visit store</p>
        </div>
        <div>
        <FiChevronDown color="white" size={20} />
        </div>
      </div>
      <div className={styles.midsection}>
         <div>
            <FaHome/>
            <p>Home</p>
         </div>
         <div>
         <FaClipboardList />
            <p>Orders</p>
         </div>
         <div>
         <FaShoppingBag />
            <p>Products</p>
         </div>
         <div>
         <FaTruck />
            <p>Delivery</p>
         </div>
         <div>
         <FaBullhorn />
            <p>Marketing</p>
         </div>
         <div>
         <FaChartLine />
            <p>Analytics</p>
         </div>
         <div>
         <FaMoneyCheckAlt />
            <p>Payouts</p>
         </div>
         <div>
            <FaTags />
            <p>Discounts</p>
         </div>
         <div>
         <FaUsers />
            <p>Audience</p>
         </div>
         <div>
         <FaPalette />
            <p>Appearance</p>
         </div>
         <div>
         <FaPlug />
            <p>Plugins</p>
         </div>
      </div>
      <div className={styles.bottomsection}>
        <div>
           <FaWallet />
        </div>
        <div>
            <p>Available credits</p>
            <p>222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
