import React from 'react';
import Prefer from '../Prefer/Prefer';
import manage from '../../../image/icon/management.png';
import support from '../../../image/icon/customer-service.png';
import internet from '../../../image/icon/internet.png';
import experience from '../../../image/icon/practice.png'
const preferds = [
    {
        icon: manage,
        title: 'Management',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto tempora, cupiditate placeat architecto recusandae, unde a provident magnam, inventore quibusdam aperiam! Possimus, vel? Error."
    },
    {
        icon: support,
        title: 'Management',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto tempora, cupiditate placeat architecto recusandae, unde a provident magnam, inventore quibusdam aperiam! Possimus, vel? Error."
    },
    {
        icon: internet,
        title: 'Management',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto tempora, cupiditate placeat architecto recusandae, unde a provident magnam, inventore quibusdam aperiam! Possimus, vel? Error."
    },
    {
        icon: experience,
        title: 'Management',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto tempora, cupiditate placeat architecto recusandae, unde a provident magnam, inventore quibusdam aperiam! Possimus, vel? Error."
    },
]

const Preferds = () => {
    return (
        <section style={{marginTop: '100px', height: '800px', background: 'rgb(255 249 255)'}} >
           <div styles={{marginTop: '100px', marginBottom: '100px'}} className="container">
           <h1 style={{paddingTop: '80px', paddingBottom: '80px'}} className='text-center'>Why You Should Prefer Classic Network</h1>
            <div className="row">
            {
               preferds.map(prefer =>  <Prefer prefer={prefer}></Prefer>)
           }
            </div>
           </div>
        </section>
    );
};

export default Preferds;