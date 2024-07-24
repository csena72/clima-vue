
export default function useClima() {
    const getClima = async (ciudad) => {
        const key = '6106004468616954059bdf6da32c7e60'
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}'

        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }

    return {
        getClima,
    }
}