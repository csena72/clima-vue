import { ref, computed } from "vue"
import axios from "axios"

export default function useClima() {

    const clima = ref({})
    const cargando = ref(false)
    const error = ref('')

    const getClima = async ({ciudad, pais}) => {
        
        const APIkey = import.meta.env.VITE_API_KEY

        cargando.value = true
        clima.value = {}
        error.value = ''

        try {
            const urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${APIkey}`
            const {data} = await axios.get(urlGeo)
            const {lat, lon} = data[0]

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
            const {data: resultado} = await axios.get(url)
            
            clima.value = resultado
            
        } catch {
            error.value = 'Ciudad no encontrada'
        } finally {
            cargando.value = false
        }
    }

    const mostrarClima = computed(() => Object.keys(clima.value).length > 0)

    const formatearTemperatura = (temp) => {
        return parseInt(temp - 273.15)
    }

    return {
        getClima,
        clima,
        mostrarClima,
        formatearTemperatura,
        cargando,
        error
    }
}