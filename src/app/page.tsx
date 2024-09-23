import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
  <div>
    <header>
      <Image src="/home/naotelu/projects/technova-my-portfolio/src/app/public/49757C78-2B04-4F99-90AE-330714DB9692.jpg" alt="Profile Icon" width={50} height={50} />
    <div className="object-right-top">
    <button className="custom-button">WORK</button>
   <button className="custom-button">PROFILE</button>
   <Link href="/contact" passHref>
   <button className="custom-button">CONTACT</button>
   </Link>
    </div>
    </header>
<section >
<h2>PROFILE</h2>
    <h2>CAREER</h2>
    <h2>WORK</h2>
    <Link href="/contact" passHref>
    <h2>CONTACT</h2>
    </Link>
    <h2>SKILL</h2>
    <h2>Q&A</h2>
</section>
  </div>
  );  
}
