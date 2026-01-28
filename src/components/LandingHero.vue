<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goLogin = () => router.push('/login')

</script>
<template>
    <section class="hero">
        <div class="titles">
            <h1>Master your classroom. <span class="featured" id="featured">Effortlessly.</span></h1>
            <p>Loomi helps teachers and students stay organized with a next-gen workspace. No more messy folders, just
                learning.</p>
        </div>
        <div class="buttons">
            <button class="cta" @click="goLogin">
                TRY NOW
            </button>
            <button class="demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259" />
                </svg>
                Watch Demo
            </button>
        </div>
        <img src="../assets/imgs/mockupLoomi.webp" alt="Mockup of Loomi">
    </section>
</template>
<style scoped>
.hero {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.titles {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.titles h1 {
    font-family: var(--font-titles);
    background: linear-gradient(to right, var(--text-main) 0%, var(--accent-primary) 120%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
    font-weight: 800;
    font-size: 3.5rem;
    display: inline-block;
}

.hero span#featured {
    display: block;
    background: none !important;
    color: var(--accent-primary);
}

.titles p {
    font-size: 1.25rem;
    text-align: center;
}

.buttons {
    display: flex;
    gap: 2rem
}

.cta {
    padding: 12px 24px;
    font-family: var(--font-titles);
    font-weight: 700;
    background-color: var(--accent-primary);
    color: var(--text-main);
    border: transparent;
    border-radius: 15px;
    font-size: 1.3rem;
    transition: all .25s ease-in;
    background: var(--accent-primary);

}

.demo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    font-family: var(--font-titles);
    font-weight: 700;
    color: var(--text-main);
    border-radius: 15px;
    font-size: 1.3rem;
    transition: all .25s ease-out;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
}

.demo:hover {
    cursor: pointer;
    box-shadow:
        0 0 6px rgba(255, 255, 255, 0.10),
        0 0 12px rgba(255, 255, 255, 0.06);

}

.demo svg {
    transition: all .2s ease-out;
}

.demo:hover svg {
    transform: rotate(-15deg) translateY(-1px);
}

.cta:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(var(--accent-primary-rgb), .25);
    background: color-mix(in srgb, var(--accent-primary) 85%, white);
}

img {
    position: absolute;
    z-index: -1;
    width: 65%;
    /* Un poco más grande para que llene la base */
    max-width: 1200px;
    right: -10%;
    bottom: 10%;
    transform: translateY(20%) rotate(-1deg);
    opacity: 0.4;
    mask-image: linear-gradient(to top, black 20%, transparent 80%);
    -webkit-mask-image: linear-gradient(to top, black 20%, transparent 80%);
    pointer-events: none;
}

/**
RESPONSIVE MEDIA QUERIES
*/
@media (max-width: 1400px) {
    .titles {
        width: 70%
    }

}

@media (max-width: 1100px) {
    .titles {
        width: 90%
    }

    img {
        position: absolute;
        z-index: -1;
        width: 85%;
        max-width: 1200px;
    }
}

@media (max-width: 800px) {
    .hero {
        justify-content: flex-start;
        padding-top: 15%;
    }

    .titles {
        width: 80%;
        padding: 20px;
    }

    img {
        position: absolute;
        z-index: -1;
        width: 105%;
        max-width: 1200px;
        transform: translateY(25%) rotate(-1deg);
    }

    .titles h1 {
        letter-spacing: -0.02em;
        font-weight: 800;
        font-size: 2.5rem;
    }

    .titles p {
        font-size: .9rem;
        text-align: center;
    }

    .buttons {
        display: flex;
        gap: 2rem
    }

    .cta {
        padding: 6px 12px;
        font-size: .9rem;
        transition: all .25s ease-in;
        background: var(--accent-primary);

    }

    .demo {
        gap: 10px;
        padding: 6px 12px;
        font-size: .9rem;
    }

}
</style>