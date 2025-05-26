import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OfficeMap = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 32.02262883670007,
    lng: 34.86486529024025,
  };

  return (
    <div className='rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px]'>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default OfficeMap;
