import hero from './../assets/images/about-hero.jpg';

export default function About() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <img src={hero} alt='capybara illustration' />  
            <h1>About</h1>
            <p>This rodent from South America is the largest in the world. A capybara can get close to 80 kg (175 pounds) but as intimidating as it might look, they are mostly shy and tame creatures.
                As the name suggests, they are usually found near swamps and water holes. The water provides a refuge from the midday heat. They are excellent swimmers. Capybara’s eyes and ears are positioned high on the head, so they can see and hear easily while swimming. Capybaras also have webbing between their fingers and toes, which helps them paddle. When frightened, they can remain underwater for several minutes.
                During the dry season—when water holes are few and far between—as many as 30 to 50 capybaras may gather around a single mud puddle. When the rains arrive, the animals break off into smaller groups.
            </p>
            <h2>WHAT IS A CAPYBARA</h2>
            <p>The capybara (Hydrochaeris hydrochaeris) is a semiaquatic animal resembling a giant guinea pig. Capybaras are the world’s largest living rodents. They are commonly called “water hogs” in South America or “Orinoca”, meaning, Hydrochoerus, water pig. </p>
            <p>It is found in Panama, east of the Canal Zone, and on the eastern side of the Andes Mountains in South America, the species ranging from Colombia and the Guianas to Uruguay and northeastern Argentina. The biggest density of capybaras can be found in Brazil and along the rivers and marshes of Los Llanos in Venezuela.</p>
          </div>
        </div>
      </div>
    );
  }
  