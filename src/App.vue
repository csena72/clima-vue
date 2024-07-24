<script setup>
    import Formulario from './components/Formulario.vue'
    import useClima from './composables/useClima'

    const { getClima } = useClima()

    getClima()

</script>

<template>
    <h1 class="titulo">Buscador de Clima</h1>

    <div class="contenedor buscador-clima">
        <Formulario
            @getClima="getClima"
        />
    </div>
</template>

