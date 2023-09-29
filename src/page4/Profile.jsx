import React from 'react'
import './profile.css'
import profile from './pic.jpeg';
import back from './back.jpeg';
const Profile = () => {
    return (
        
            <div className='profile'>
                <img className="back-jpg"src={back} alt="background" />
                <img src={profile} alt="profile" className='proof' />
                <div className="inner-box">
                <h3 className="name">Umesh Kumar</h3>
                <h4 className="post">Student & FreeLancer</h4>
                </div>
                


            </div>

    )
}

export default Profile