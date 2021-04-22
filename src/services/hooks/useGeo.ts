import {useEffect, useState} from 'react'

interface Location {
    loaded: boolean
    coord?: {
        lat: number
        lon: number
    }
    error?: LocationErr
}

interface LocationErr {
    code: number,
    message: string
}

export const useGeo = () => {
    const [location, setLocation] = useState<Location>({
        loaded: false
    })

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coord: {
                lat: location.coords.latitude,
                lon: location.coords.longitude
            }
        })
    }

    const onError = (error: GeolocationPositionError | LocationErr) => {
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(() => {
        if (!(navigator.geolocation)) {
            onError({
                code: 0,
                message: 'Geo not supported'
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location
}