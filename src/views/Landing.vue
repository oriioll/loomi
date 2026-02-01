<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LandingHeader from '@/components/Landing/LandingHeader.vue';
import LandingHero from '@/components/Landing/LandingHero.vue';
import LandingFeatures from '@/components/Landing/LandingFeatures.vue';
const router = useRouter()

</script>
<template>
    <main>
        <LandingHeader />
        <LandingHero />
        <LandingFeatures />
    </main>
</template>
<style scoped>
main {
    scroll-behavior: smooth;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>