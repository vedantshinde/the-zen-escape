/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidmVkYW50MTAxIiwiYSI6ImNraHQzY2VsazF3ZWwydWs2ZzVnYnd3Z2UifQ.5jZ1x7QI-cX_ceyDAHfIOQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vedant101/ckhvl3hxt0hrh19okbhiinfd9',
    scrollZoom: false,
    // center: [-118.23571290288807, 34.03408086579255],
    // zoom: 6,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 200,
    },
  });
};
