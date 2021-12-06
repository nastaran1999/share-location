import { useState, createContext, useCallback } from 'react'
import { LatLngTuple } from 'leaflet';

interface Location {
    location: LatLngTuple,
    locationName: string,
    locationType: string,
    logoAddress: string,
}

export interface LocationContextData {
    userInfo: Location[];
    addLocation: (data: Location) => void;
}
   
const locationContextDefaultValue: LocationContextData = {
    userInfo: [],
    addLocation: () => null
}
   
export const DataContext = createContext<LocationContextData>(locationContextDefaultValue);

export function DataProvider(props: any) {
    const [userInfo, setUserInfo] = useState<Location[]>([{
        location: [ 50.50720405214385, 30.45099064239025 ],
        locationName: 'company',
        locationType: 'busines',
        logoAddress: '/bmw.png',
    },
    {
        location: [ 50.49257254923671, 30.432456257357227 ],
        locationName: 'company2',
        locationType: 'busines2',
        logoAddress: '/apple.png',
    },]);

    const addLocation = useCallback((newUserLocation: any) => {
            console.log('innnn')
            setUserInfo(prevUsers => [...prevUsers, newUserLocation])
      }, [setUserInfo]);

    return (
        <DataContext.Provider value={{ userInfo, addLocation }}>
            {props.children}
        </DataContext.Provider>
    )

}

