import Image from 'next/image';
import Profile from './profile';

export default function Home() {
  return (
  <div>
    <header>
    <div className="object-right-top">
    <button className="custom-button">WORK</button>
   <button className="custom-button">PROFILE</button>
   <button className="custom-button">CONTACT</button>
    </div>
    </header>
    
  </div>
  );  
}
