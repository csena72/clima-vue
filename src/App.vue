<script setup>
    import Formulario from './components/Formulario.vue'
    import Spinner from './components/Spinner.vue'
    import Clima from './components/Clima.vue'
    import Alerta from './components/Alerta.vue'
    import useClima  from './composables/useClima'

    const { 
      getClima, 
      clima, 
      mostrarClima, 
      formatearTemperatura, 
      cargando,
      error,
    } = useClima()

</script>

<template>
    <h1 class="titulo">Buscador de Clima</h1>

    <div class="contenedor buscador-clima">
        <Formulario
            @get-clima="getClima"
        />

        <Spinner v-if="cargando"/>
        <Alerta v-if="error">{{ error }}</Alerta>

        <Clima
            v-if="mostrarClima"
            :clima="clima"
        />
    </div>
</template>

