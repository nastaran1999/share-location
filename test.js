import L from 'leaflet';
import { useEffect } from 'react';

function Legend({ map }) {
  const getColor = (d) => {
    return d > 20
      ? '#800026'
      : d > 10
      ? '#E31A1C'
      : d > 5
      ? '#FC4E2A'
      : d > 2
      ? '#FEB24C'
      : '#FFEDA0';
  };
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: 'bottomleft' });
      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [0, 2, 5, 10, 20];
        let labels = [];
        let from;
        let to;
        for (let i = 0; i < grades.length; i++) {
          from = grades[i];
          to = grades[i + 1];
          labels.push(
            '<i style="background:' +
              getColor(from + 1) +
              '"></i> ' +
              from +
              (to ? '&ndash;' + to : '+')
          );
        }
        div.innerHTML = labels.join('<br>');
        return div;
      };
      legend.addTo(map);
    }
  }, [map]); //here add map
  return null;
}
export default Legend;
