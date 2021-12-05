import L from "leaflet";
import iconImg from '../img/marker-icon.png';
import iconShadow from '../img/marker-shadow.png';

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: iconImg,
    shadowUrl: iconShadow
  });
  
export default icon;