import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";




export default function Home() {
  return (
  <div>
    <header>
    <div className="profile-container">
          <div className="profile-icon">
            <Image
              src="/49757C78-2B04-4F99-90AE-330714DB9692.jpg"
              alt="Profile Icon"
              width={50}
              height={50}
            />
          </div>

          <div className="profile-image">
            <Image
              src="/my_icon.png"  
              alt="New Photo"
              width={50}
              height={50}
            />
          </div>
        </div>

    <div className="object-right-top">
    <button className="custom-button">WORK</button>
   <button className="custom-button">PROFILE</button>
   <Link href="/contact" passHref>
   <button className="custom-button">CONTACT</button>
   </Link>
    </div>
    </header>
<section >
    <h2 className="profile-section">
    PROFILE<FaArrowRight className="arrow"/>
    </h2>
    <h2 className="career-section">
      CAREER<FaArrowRight className="arrow"/>
    </h2>
    <h2 className="work-section">
      WORK<FaArrowRight className="arrow"/>
    </h2>
    <Link href="/contact" passHref>
    <h2 className="contact-section">
      CONTACT<FaArrowRight className="arrow"/>
    </h2>
    </Link>
    <h2 className="skill-section">
      SKILL<FaArrowRight className="arrow"/>
    </h2>
    <h2 className="question-section">
      Q&A<FaArrowRight className="arrow"/>
    </h2>
</section>
  </div>
  );  
}
