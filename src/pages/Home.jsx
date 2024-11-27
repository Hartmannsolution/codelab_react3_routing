import { useOutletContext } from "react-router-dom"; 
import krollebolle from "../assets/krollebolle.png";
const Home = () => {
  const { user } = useOutletContext();
  return (
    <div>
      {user.username ? <h3>Welcome to Bornholm {user.username} </h3> : <h3 style={{backgroundColor:'red'}}>Please login first</h3>}
      <p>Bornholm er en dansk ø i Østersøen, der ligger mod syd for Sverige og øst for Tyskland. </p><p>Øen er en del af Region Hovedstaden og har 39.633 indbyggere (2021).</p>
      <p> Bornholm er Danmarks østligste ø og har et areal på 588,36 km².</p>
      <p> Øen er kendt for sine røgede sild, klipper, sandstrande og røgede sild.</p> 
      <p>Bornholm er også kendt for sine mange rundkirker, som er enestående for Danmark.</p>
      <p> Øen har en lang historie, og der er mange steder på øen, hvor man kan se spor fra fortiden. </p><p>Bornholm er et populært turistmål, og der er mange turister, der besøger øen hvert år. Øen har et varieret landskab med skove, marker, klipper og sandstrande. Der er mange muligheder for at opleve naturen på øen, og der er mange vandrestier og cykel
        ruter
      </p>



        <img src={krollebolle} alt="krollebolle" width="300" height="300" />
    </div>
  );
};
export default Home;
