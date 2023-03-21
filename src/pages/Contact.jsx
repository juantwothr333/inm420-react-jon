import hero from './../assets/images/contact-hero.jpg';

export default function Contact() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <img src={hero} alt='capybara illustration' />  
            <h1>GET IN TOUCH WITH US!</h1>
          </div>
          <div>
            <h2>Address</h2>
            <p>Deer Pen Rd, Toronto, ON <br/> Open every day. Our current opening hours are 9:00 am - 7:00 pm. </p>
          </div>
          <div>
            <h2>Email | Phone Number</h2>
            <p>capybara@mail.com | 647-123-4567</p>
          </div>
        </div>
      </div>
    );
  }
  