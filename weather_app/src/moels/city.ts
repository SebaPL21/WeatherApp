export interface City{
    id: number,
    name: string,
    state: string,
    country: string,
    cord: {
        lon: number,
        lat: number,
    };
}