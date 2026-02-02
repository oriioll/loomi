<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LandingHeader from '@/components/Landing/LandingHeader.vue';
import LandingHero from '@/components/Landing/LandingHero.vue';
import LandingFeatures from '@/components/Landing/LandingFeatures.vue';
import LandingPricing from '@/components/Landing/LandingPricing.vue';
const router = useRouter()

</script>
<template>
    <main>
        <LandingHeader />
        <LandingHero />
        <LandingFeatures />
        <LandingPricing />
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
    gap: 5rem;
}
</style>