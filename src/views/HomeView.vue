<template>
  <div class="home-wrapper">
    <HeaderComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<style>
  .home-wrapper{
    background-color: var(--primary-color);
  }
</style>

<script>
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    FooterComponent,
    AboutComponent
  }
}
</script>
