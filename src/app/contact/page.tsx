export default function contact() {
    return (
      <div className="container">
      <header className="header">
        <div className="header-left">
          <h1 className="contact-text">CONTACT</h1>
        </div>
        <div className="header-right">
          <Link href="/profile">
            <button className="custom-button">PROFILE</button>
          </Link>
          <Link href="/contact">
            <button className="custom-button">CONTACT</button>
          </Link>
        </div>
      </header>

      <section className="center">
        <Icons /> 
        <p className="contact-below-icons">CONTACT</p>
      </section>
    </div>
    );
  }