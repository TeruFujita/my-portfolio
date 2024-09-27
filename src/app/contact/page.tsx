import Image from 'next/image';
import './contact.css';

export default function contact() {
    return (
      <div className="container">
      <header className="header">
        <div className="header-left">
          <h1 className="contact-text">CONTACT</h1>
        </div>
        <div className="object-right-top">
          <button className="custom-button">PROFILE</button>
          <button className="custom-button">CONTACT</button>
          
        </div>
      </header>

      <div className="icon-container">
      <div className="icon-item">
        <div className="icon-circle">
          <Image src="/X.png" alt="X Icon" className="icon-image" width={50} height={50}/>
        </div>
        <p className="icon-label">X</p>
      </div>

      <div className="icon-item">
        <div className="icon-circle">
          <Image src="/Instagram.jpg" alt="Instagram Icon" className="icon-image" width={50} height={50}/>
        </div>
        <p className="icon-label">Instagram</p>
      </div>

      <div className="icon-item">
        <div className="icon-circle">
          <Image src="/Qiita.png" alt="Qiita Icon" className="icon-image" width={50} height={50}/>
        </div>
        <p className="icon-label">Qiita</p>
      </div>
    </div>

    </div>
    );
  }