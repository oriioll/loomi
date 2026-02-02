<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LandingHeader from '@/components/Landing/LandingHeader.vue';
import LandingHero from '@/components/Landing/LandingHero.vue';
import LandingFeatures from '@/components/Landing/LandingFeatures.vue';
import LandingPricing from '@/components/Landing/LandingPricing.vue';
import LandingAbout from '@/components/Landing/LandingAbout.vue';
import LandingFooter from '@/components/Landing/LandingFooter.vue';
const router = useRouter()

</script>
<template>
    <main>
        <LandingHeader />
        <LandingHero />
        <LandingFeatures />
        <LandingPricing />
        <LandingAbout />
        <LandingFooter />
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
    animation: fadeInIntro 1s;
}

@keyframes fadeInIntro {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>