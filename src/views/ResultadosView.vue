<template>
    <HeaderComponent />
        <EventosComponent />
    <FooterComponent/>
</template>

<style scoped>
</style>

<script>
import EventosComponent from '@/components/EventosComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';


    export default{
        name: "ResultadosView",
        components: {
            FooterComponent,
            HeaderComponent,
            EventosComponent
        }
    }

</script>