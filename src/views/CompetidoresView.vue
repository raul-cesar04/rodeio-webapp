<template>
    <div class="competidores-wrapper">
        <HeaderComponent />
        <div class="competidores">
            <CompetidoresComponent />
        </div>

        <FooterComponent />
    </div>
</template>

<style>
</style>

<script>
import CompetidoresComponent from '@/components/CompetidoresComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

    export default {
        name: 'CompetidoresView',
        components: {
            HeaderComponent,
            FooterComponent,
            CompetidoresComponent
        }
    }
</script>
