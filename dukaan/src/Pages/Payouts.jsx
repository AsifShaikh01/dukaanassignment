import React from 'react'
import { MdSort } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { IoVolumeHighOutline } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa';
import Sidebar from '../components/Sidebar'
import { FaQuestionCircle } from 'react-icons/fa';
import styles from "../styles/payouts.module.css"
import { FaChevronRight } from 'react-icons/fa';
import Table from '../components/Table';
const Payouts = () => {
  return (
    <div className={styles.mainDiv}>
        <div>
        <Sidebar/>
        </div>
        
      <div>
          <div className={styles.navbar}>
              <div>
                <p>Payouts</p>
                <p><FaQuestionCircle/>How it works</p>
              </div>
             <input type="search" placeholder='Search features, tutorials, etc.'/>
             <div>
                <IoVolumeHighOutline color='black' style={{"backgroundColor":"#f2f2f2","padding":"6px","borderRadius":"50%"}}/>
                <FaCaretDown color='black' style={{"backgroundColor":"#f2f2f2","padding":"6px","borderRadius":"50%"}}/>
             </div>
          </div>
          <div className={styles.info}>
            <p>Overview</p>
            <div>
                <p>This month</p>
                <FiChevronDown/>
            </div>
          </div>
          <div className={styles.cards}>
             <div>
                <div>
                    <p>Next Payout</p>
                    <FaQuestionCircle/>
                </div>
                <div>
                <span>&#8377;</span><p>2,312.23</p>
                <div>
                    <p>23 orders</p>
                    <FaChevronRight/>
                </div>
                </div>
                <div className={styles.special}>
                   <p>Next payout date:</p>
                   <p>Today, 04:00PM</p>
                </div>
             </div>

             <div>
             <div>
                    <p>Amount Pending</p>
                    <FaQuestionCircle/>
                </div>
                <div>
                <span>&#8377;</span><p>2,312.23</p>
                <div>
                    <p>13 orders</p>
                    <FaChevronRight/>
                </div>
                </div>
             </div>
             <div>
             <div>
                    <p>Amount Processed</p>
                    <FaQuestionCircle/>
                </div>
                <div>
                <span>&#8377;</span><p>2,312.23</p>
                <div>
                    
                </div>
                </div>
             </div>
          </div>
          <div className={styles.info2}>Transactions | This month</div>
          <div className={styles.buttons}>
             <button>Payouts (22)</button>
             <button>Refunds (2)</button>
          </div>
          <div className={styles.info3}>
             <input type="search" placeholder='search' />
             <div>
                <div>Sort <MdSort/></div>
                <div><FiDownload/></div>
             </div>
          </div>
          <div className={styles.table}>
              <Table/>
          </div>
      </div>
    </div>
  )
}

export default Payouts
