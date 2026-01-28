<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LandingHeader from '@/components/LandingHeader.vue';
import LandingHero from '@/components/LandingHero.vue';
const router = useRouter()

</script>
<template>
    <main>
        <LandingHeader />
        <LandingHero />
    </main>
</template>
<style scoped>
main {
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>