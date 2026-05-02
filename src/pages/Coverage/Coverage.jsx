import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from "react";
const Coverage = () => {
    const position = [23.6850, 90.3563]
    const [serviceCenters, setServiceCenters] = useState([]);
    const [search, setSearch] = useState("");
    const mapRef = useRef(null);

    // fetching data
    useEffect(() => {
        fetch("/data/warehouses.json")
            .then(res => res.json())
            .then(data => setServiceCenters(data));
    }, []);


    // serching funtion
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(search);
        const district = serviceCenters.find((c) =>
            c.district.toLowerCase().includes(search.toLowerCase())
        );
        if (district) {
            const coord = [district.latitude, district.longitude];
            // console.log(district, coord)
            // goto the location
            mapRef.current.flyTo(coord, 12); 
        }
    };
    return (
        <div className="bg-white p-12 md:m-12 m-4 rounded-[15px]">
            <h1 className="md:text-4xl text-2xl text-green-700 font-bold p-2">We are available in 64 districts.</h1>
            <div className=" w-96">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <Input
                        className="rounded-[15px]"
                        placeholder="Search Here..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Button type="submit" className="rounded-[15px] text-black">
                        Search
                    </Button>
                </form>
            </div>
            <hr className="my-4" />
            <h1 className="md:text-2xl text-2xl text-green-700 font-bold p-2">We Deliver almost all over Bangladesh.</h1>

            <div className="border w-full h-150">
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="w-full h-150" ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {serviceCenters.map((center, index) => (
                        <Marker
                            key={index}
                            position={[center?.latitude, center?.longitude]}
                        >
                            <Popup>
                                <strong>{center?.district}</strong> <br />
                                Service Area: {center?.covered_area.join(", ")}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverage;