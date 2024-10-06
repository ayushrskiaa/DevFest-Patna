import React from 'react';
import './Team.css'; 
// import frame from './components/frame.png'; 
import frame from './components/frame4.svg';
import Man from './components/man1.png';
const Team = () => {
  
  const teamMembers = [
    {
      id: 1,
      name: 'Batman',
      designation: 'Tech Team',
      linkedin: 'https://www.linkedin.com/in/ayushkumar',
      github: 'https://github.com/ayushrskiaa',
      image: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',  
      
    },
    {
      id: 2,
      name: 'Ramesh',
      designation: 'Tech Team',
      linkedin: '##',
      github: 'https://github.com/ayushrskiaa',
      image: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
    },
    {
      id: 3,
      name: 'Suresh',
      designation: 'Tech Team',
      linkedin: '##',
      github: 'https://github.com/ayushrskiaa',
      image: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
    },
    {
      id: 4,
      name: 'Mohan',
      designation: 'Tech Team',
      linkedin: '##',
      github: 'https://github.com/ayushrskiaa',
      image: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
    },
  ];

 


  return (
    <div className="team-container">
      <h2 className='meet-team'> Meet Our Team</h2>
      <h2 className='meet-team-team'>Tech team</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          
          <div className="team-member" key={member.id}>
          
          <div className='image-container'>
          {/* <img src={member.image} alt={member.name} className="team-member-image" /> */}
          <img src={member.image} alt={member.name} className="team-member-image" />
          <img src={frame} alt="Frame" className="team-member-frame" />
          </div>
            
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
            <div className="icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
             
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZ7ih0RMvWGQ4X98WXAZofSI-cGiWSFs-5Q&s" alt="" className='linkedin-image' />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="x">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapHbo9tgBKTvBsmgGa55DgS8jOqWyxKOE_Q&s" alt=""  className='x-image' />
               
              </a>
            </div>

          </div>
        ))}
      </div>


{/* team2 */}

      <h2 className='meet-team-team'>Design Team</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          
          <div className="team-member" key={member.id}>
          
          <div className='image-container'>
          {/* <img src={member.image} alt={member.name} className="team-member-image" /> */}
          <img src={member.image} alt={member.name} className="team-member-image" />
          <img src={frame} alt="Frame" className="team-member-frame team-member-frame-d" />
          </div>
            
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
            <div className="icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
             
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZ7ih0RMvWGQ4X98WXAZofSI-cGiWSFs-5Q&s" alt="" className='linkedin-image' />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="x">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapHbo9tgBKTvBsmgGa55DgS8jOqWyxKOE_Q&s" alt=""  className='x-image' />
               
              </a>
            </div>

          </div>
        ))}
      </div>


{/* team3 */}

<h2 className='meet-team-team'>Operation Team</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          
          <div className="team-member" key={member.id}>
          
          <div className='image-container'>
          {/* <img src={member.image} alt={member.name} className="team-member-image" /> */}
          <img src={member.image} alt={member.name} className="team-member-image" />
          <img src={frame} alt="Frame" className="team-member-frame" />
          </div>
            
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
            <div className="icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
             
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZ7ih0RMvWGQ4X98WXAZofSI-cGiWSFs-5Q&s" alt="" className='linkedin-image' />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="x">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapHbo9tgBKTvBsmgGa55DgS8jOqWyxKOE_Q&s" alt=""  className='x-image' />
               
              </a>
            </div>

          </div>
        ))}
      </div>




    </div>
  );
};

export default Team;