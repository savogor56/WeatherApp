export interface WeatherData{
    coord: WeatherCoord
    weather: WeatherInfo[]
    base: string
    main: WeatherMain
    visibility: number
    wind: Wind,
    clouds: Clouds,
    dt: number
    sys: WeatherSys
    timezone: number
    id: number
    name: string
    cod: number
}

export interface WeatherCoord {
    lon: number
    lat: number
}

export interface WeatherInfo {
    id: number
    main: string
    description: string
    icon: string
}

export interface WeatherMain {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

export interface Wind {
    speed: number
    deg: number
}

export interface Clouds {
    all: number
}

export interface WeatherSys {
    type: number
    id: number
    country: "RU",
    sunrise: number
    sunset: number
}