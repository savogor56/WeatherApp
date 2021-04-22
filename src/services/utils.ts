export const upperFirstChar = (str: string) => {
    return str[0].toUpperCase() + str.toLowerCase().slice(1)
}

export const getDegreeDesc = (degree: number) => {
    if (degree>337.5) return 'Северный';
    if (degree>292.5) return 'Северо-Западный';
    if(degree>247.5) return 'Западный';
    if(degree>202.5) return 'Юго-Западный';
    if(degree>157.5) return 'Южный';
    if(degree>122.5) return 'Южно-Восточный';
    if(degree>67.5) return 'Восточный';
    if(degree>22.5){return 'Северо-Восточный';}
    return 'Северный';
}
