import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import DestinationsPage from "./pages/DestinationsPage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import BookingListPage from "./pages/BookingListPage";

import Menu from "./components/Menu";

import "./App.css";

const destinations = [
  {
    name: "Solaria",
    description:
      "Embark on a journey to Solaria, a paradise world where vast, shimmering cities stretch across the horizon. Experience the serenity of its pristine landscapes and marvel at the advanced technology that seamlessly integrates with nature. Encounter the enigmatic Solarians, a society of individuals who live in splendid isolation, surrounded by robotic companions. Discover the secrets of Solaria's utopian society as you immerse yourself in its unique culture and way of life.",
    features: [
      "Shimmering cities",
      "Pristine landscapes",
      "Advanced technology",
      "Solarians and their robotic companions",
    ],
    services: ["Accommodation", "Transportation", "Guided tours"],
    image: "solaria.png",
  },
  {
    name: "The Culture Orbitals",
    description:
      "Welcome to The Culture Orbitals, a network of artificial habitats scattered throughout the galaxy. Indulge in the boundless offerings of this post-scarcity society, where every desire is catered to by benevolent AIs known as Minds. Immerse yourself in the vibrant tapestry of cultures, arts, and sciences that flourish across the Orbitals. From grand festivals celebrating diversity to serene retreats amidst breathtaking celestial vistas, The Culture Orbitals offer an unparalleled experience of exploration and enlightenment.",
    features: [
      "Artificial habitats",
      "Post-scarcity society",
      "Benevolent AIs (Minds)",
      "Diverse cultures and arts",
    ],
    services: ["Hospitality", "Shuttle services", "Cultural experiences"],
    image: "culturerings.png",
  },
  {
    name: "Tralfamadore",
    description:
      "Journey to Tralfamadore, a whimsical world where time is not a linear concept. Delve into the surreal landscapes of this enigmatic planet, where beings known as Tralfamadorians perceive the universe in a unique, multidimensional manner. Explore the intricate patterns of reality as you interact with these curious inhabitants. From whimsical tea parties to philosophical discussions on the nature of existence, Tralfamadore offers a truly mind-bending experience for the adventurous traveler.",
    features: [
      "Non-linear time",
      "Surreal landscapes",
      "Tralfamadorians",
      "Philosophical discussions",
    ],
    services: [
      "Lodging",
      "Interdimensional transportation",
      "Guided excursions",
    ],
    image: "tralfamadore.png",
  },
  {
    name: "Rama",
    description:
      "Embark on a once-in-a-lifetime expedition to Rama, a colossal cylindrical spaceship of mysterious origin. Traverse the vast plains and towering cliffs of this alien vessel as you unravel its secrets. Encounter the remnants of an advanced civilization and ponder the purpose behind Rama's interstellar journey. From awe-inspiring vistas to perplexing artifacts, Rama promises an adventure unlike any other, where every discovery leads to new questions and revelations.",
    features: [
      "Colossal cylindrical spaceship",
      "Alien landscapes",
      "Remnants of an advanced civilization",
      "Mysterious artifacts",
    ],
    services: [
      "Expedition accommodations",
      "Exploration equipment",
      "Research assistance",
    ],
    image: "rama.png",
  },
  {
    name: "Trantor",
    description:
      "Step into the heart of the Galactic Empire on Trantor, a planet covered entirely by a sprawling ecumenopolis. Marvel at the towering skyscrapers that pierce the sky and the intricate web of tunnels that snake beneath the surface. Experience the bustling energy of this political and cultural epicenter as you navigate its labyrinthine streets. From opulent palaces to bustling marketplaces, Trantor offers a glimpse into the grandeur and complexity of the galaxy-spanning empire.",
    features: [
      "Sprawling metropolis",
      "Towering skyscrapers",
      "Intricate tunnel network",
      "Political and cultural epicenter",
    ],
    services: [
      "Luxury accommodations",
      "Public transportation",
      "Historical tours",
    ],
    image: "trantor.png",
  },
  {
    name: "Arrakis (Dune)",
    description:
      "Embark on an epic adventure to Arrakis, the desert planet known as Dune. Traverse vast sand dunes and rocky outcrops as you explore the harsh yet beautiful landscape of this unforgiving world. Encounter the fierce Fremen tribes who navigate the sands with skill and resilience. Delve into the politics and intrigue surrounding the planet's most precious resource, the spice melange. From ancient ruins to towering sandworms, Arrakis promises an unforgettable journey through a realm of danger and intrigue.",
    features: [
      "Desert landscape",
      "Fremen tribes",
      "Spice melange",
      "Sandworms",
    ],
    services: ["Desert accommodations", "Sand skimmers", "Guided desert treks"],
    image: "arrakis.png",
  },
  {
    name: "Solaris",
    description:
      "Embark on a journey of introspection to Solaris, a mysterious planet covered entirely by a sentient ocean. Witness the ever-shifting surface of Solaris as it manifests the deepest fears and desires of those who study it. Engage in philosophical debates on the nature of consciousness and reality as you confront the enigmatic manifestations of Solaris. From hauntingly beautiful landscapes to unsettling encounters with the unknown, Solaris offers a profound exploration of the human psyche.",
    features: [
      "Sentient ocean",
      "Ever-shifting surface",
      "Philosophical debates",
      "Manifestations of consciousness",
    ],
    services: [
      "Research accommodations",
      "Oceanic exploration vessels",
      "Psychological support",
    ],
    image: "solaris.png",
  },
  {
    name: "Alpha Centauri",
    description:
      "Embark on an interstellar voyage to Alpha Centauri, a binary star system teeming with potential for exploration. Discover new worlds orbiting these twin suns, each with its own unique environments and ecosystems. From lush, habitable planets to barren moons waiting to be terraformed, Alpha Centauri offers endless opportunities for scientific discovery and expansion. Join the pioneering efforts to unlock the secrets of this distant frontier and build a new future among the stars.",
    features: [
      "Binary star system",
      "Habitable planets",
      "Terraforming opportunities",
      "Scientific exploration",
    ],
    services: [
      "Exploration assistance",
      "Interstellar travel",
      "Planetary surveys",
    ],
    image: "alphacentauri.png",
  },
  {
    name: "Magrathea",
    description:
      "Discover the legendary world of Magrathea, a planet shrouded in mystery and myth. Unravel the secrets of this ancient civilization, known for its ability to construct custom-made planets for the galaxy's wealthiest clientele. Explore the remnants of Magrathea's once-great industry, hidden deep within its labyrinthine tunnels. From awe-inspiring caverns to technological marvels beyond imagination, Magrathea offers a glimpse into the lost wonders of the cosmos.",
    features: [
      "Custom-made planets",
      "Ancient civilization",
      "Labyrinthine tunnels",
      "Technological marvels",
    ],
    services: [
      "Guided expeditions",
      "Archaeological digs",
      "Custom planet design consultations",
    ],
    image: "magrathea.png",
  },
  {
    name: "Freeside",
    description:
      "Welcome to Freeside, the glittering jewel of the orbital colonies. Step into a world of luxury and excess, where the rich and powerful play by their own rules among the stars. Marvel at the towering spires and opulent palaces that dot the artificial landscape of this spaceborne playground. Indulge in the finest cuisine, entertainment, and pleasures that money can buy, as you mingle with the elite of society. From exclusive clubs to extravagant penthouses, Freeside offers an escape from the confines of Earth, where dreams are made real amidst the eternal night of space.",
    features: [
      "Luxury orbital colony",
      "Towering spires",
      "Opulent palaces",
      "Exclusive clubs",
    ],
    services: ["Luxury accommodations", "Fine dining", "Entertainment venues"],
    image: "freeside.png",
  },
  {
    name: "Kern's World",
    description:
      "Embark on an odyssey to Kern's World, a distant planet teeming with life and evolution. Witness the awe-inspiring spectacle of uplifted creatures, each striving to carve out their place in the complex ecosystem of this alien world. Delve into the mysteries of the Spider Civilization, a society of sentient arachnids whose ingenuity rivals that of humanity. From towering tree cities to intricate silk networks, Kern's World offers a window into the endless possibilities of evolutionary adaptation and coexistence.",
    features: [
      "Teeming with life",
      "Uplifted creatures",
      "Spider Civilization",
      "Intricate ecosystems",
    ],
    services: [
      "Ecotourism excursions",
      "Alien cultural exchanges",
      "Biological research expeditions",
    ],
    image: "kerns.png",
  },
  {
    name: "Clavius Base",
    description:
      "Experience the awe-inspiring grandeur of Clavius Base, an orbital research facility nestled within the vastness of space. Located on the cratered surface of the Moon, this is one of the largest permanent lunar bases, and a pioneering outpost which serves as humanity's gateway to the stars. Explore the cutting-edge laboratories where scientists unravel the mysteries of the cosmos and push the boundaries of human knowledge. From breathtaking lunar vistas to the endless expanse of the cosmos beyond, Clavius Base offers a glimpse into humanity's quest for understanding and exploration.",
    features: [
      "Orbital research facility",
      "Lunar surface",
      "Cutting-edge laboratories",
      "Breathtaking vistas",
    ],
    services: [
      "Research accommodations",
      "Spacecraft docking",
      "Astronomical observations",
    ],
    image: "clavius.png",
  },
];
export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/*Navigation Menu component*/}
        <Menu />
        {/*Creates the routes for each page component*/}
        <Routes>
          {/*Points to the main page */}
          <Route path="/" element={<IndexPage />} />

          {/*Points to the destinations page, and sends all the destinations */}
          <Route
            path="/destinations"
            element={<DestinationsPage destinations={destinations} />}
          />

          {/*Points to the booking form*/}
          <Route
            path="/booking"
            element={<BookingPage destinations={destinations} />}
          />
          {/*Points to the list of reservations that have been made*/}
          <Route path="/booking-list" element={<BookingListPage />} />
          {/*Points to the about page} */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
