<template>
    <div class="animais-wrapper">
        <HeaderComponent />
        <div class="animais">
            <AnimaisComponent />
        </div>

        <FooterComponent />
    </div>
</template>

<style>
</style>

<script>
import AnimaisComponent from '@/components/AnimaisComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';


    export default {
        name: 'AnimaisView',
        components: {
            HeaderComponent,
            FooterComponent,
            AnimaisComponent
        }
    }
</script>
