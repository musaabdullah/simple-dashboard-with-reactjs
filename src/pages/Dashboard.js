import React from 'react'
import './dashboard.css';
import * as Aicon from 'react-icons/ai' 
import IMG from './IMG.jpg';
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashbard__sidebar">
              <h3 className="header">Ready Dashboard</h3>
              <div className="user__detail">
                  <img src={IMG} />
                  <div className="detail">
                      <p>Hizrian</p>
                      <p>Administrator</p>
                  </div>
              </div>
              <div className="nav_items">
                  <a href="#">Dashboard</a>
                  <a href="#">components</a>
                  <a href="#">Forms</a>
                  <a href="#">Tables</a>
                  <a href="#">Notificiations</a>
                  <a href="#">Typogrphy</a>
                  <a href="#">Icons</a>
              </div>
            </div>
            <div className="dashbard__main">
                <div className="main__navbar">
                   <div className="navbar__search">
                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <button><Aicon.AiOutlineSearch/></button>
                        </div>
                   </div>
                   <div className="navbar__user">
                       <div className="user__mesasge">
                          <span><Aicon.AiOutlineMail/></span>
                       </div>
                       <div className="user__bill">
                           <span><Aicon.AiOutlineBell/></span>
                       </div>
                       <div className="user__user">
                        <div className="user__data">
                          <img src={IMG} />
                          <span> Hizrian</span>
                        </div>
                          {/* <ul>
                              <li><a href="#">My Profile</a></li>
                              <li><a href="#">My Balance</a></li>
                              <li><a href="#">Inbox</a></li>
                              <li><a href="#">Account Setting</a></li>
                              <li><a href="#">Logout</a></li>
                          </ul> */}
                       </div>
                   </div>
                </div>
                <div className="main__main">
                       <div className="div__main">
                           <div className="title">
                               Dashbard
                           </div>
                           <div className="main__detail">
                               <div className="card">
                                   <div className="card__icon">
                                       ICON
                                   </div>
                                   <div className="card__body">
                                       <div className="card__title">
                                          Visitors
                                       </div>
                                       <div className="card__price">
                                           1,294
                                       </div>
                                   </div>
                               </div>
                               <div className="card">
                                   <div className="card__icon">
                                       ICON
                                   </div>
                                   <div className="card__body">
                                       <div className="card__title">
                                          Visitors
                                       </div>
                                       <div className="card__price">
                                           1,294
                                       </div>
                                   </div>
                               </div>
                               <div className="card">
                                   <div className="card__icon">
                                       ICON
                                   </div>
                                   <div className="card__body">
                                       <div className="card__title">
                                          Visitors
                                       </div>
                                       <div className="card__price">
                                           1,294
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="div__bottom">

                       </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
