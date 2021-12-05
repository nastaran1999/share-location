import { useState, createContext, useCallback } from 'react'
import { LatLngExpression } from 'leaflet';

interface Post {
    location: LatLngExpression,
    locationName: string,
    locationType: string,
    logoAddress: string,
}

export interface PostsContextData {
    userInfo: Post[];
    removePost: (postId: Post) => void;
}
   
const postsContextDefaultValue: PostsContextData = {
    userInfo: [],
    removePost: () => null
}
   
export const DataContext = createContext<PostsContextData>(postsContextDefaultValue);

export function DataProvider(props: any) {
    const [userInfo, setUserInfo] = useState<Post[]>([{
        location: { lat: 50.50720405214385, lng: 30.45099064239025 },
        locationName: 'company',
        locationType: 'busines',
        logoAddress: '/bmw.png',
    },
    {
        location: { lat: 50.49257254923671, lng: 30.432456257357227 },
        locationName: 'company2',
        locationType: 'busines2',
        logoAddress: '/apple.png',
    },]);

    const removePost = useCallback((newUserLocation: any) => {
            console.log('innnn')
            setUserInfo(prevUsers => [...prevUsers, newUserLocation])
      }, [setUserInfo]);

    return (
        <DataContext.Provider value={{ userInfo, removePost }}>
            {props.children}
        </DataContext.Provider>
    )

}

