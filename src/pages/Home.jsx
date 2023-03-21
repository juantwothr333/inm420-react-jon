import { Link } from "react-router-dom";
import hero from './../assets/images/hero-image.svg';

export default function Home() {
    return (

      <div>
        {/* Home Content Here */}
        {/* <div className="hero-image">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={hero} alt='capybara illustration' />
              </div>
              <div className="col-md-6">
                <h1>Headline</h1>
                <p>Content goes here.</p>
                <button>Call to Action</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="hero-image">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={hero} alt='capybara illustration' />
              </div>
              <div className="col-md-6 col-md-6-desktop">
                <h1>CAPYBARA</h1>
                <h3 className = 'homeH3' >THE LARGEST RODENT.</h3>
                  <Link to="/about">
                    <button>View More</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }