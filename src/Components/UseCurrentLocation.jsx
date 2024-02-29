import { useEffect, useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    setLoading(false);
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
        };

        if (navigator.geolocation) {
            getCurrentLocation();
        } else {
            setError("Geolocation is not supported");
            setLoading(false);
        }
    }, []);

    const getCurrentLocation=()=>{
        setLoading(true)
        getCurrentLocation()
    }



 

    return {
        location,
        loading,
        error,
        getCurrentLocation
    };
}