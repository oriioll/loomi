<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

</script>
<template>
    <section class="features" id="features">
        <h2>Everything you need.</h2>
        <div class="grid">
            <article class="gridA">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" stroke="#6366f1" stroke-width="1.5">
                        <path
                            d="M21 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-13 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8 4.5l7.5 5l-7 5l7.5 5" />
                    </g>
                </svg>
                <p><span>Organized workflow:</span> "Everything in its place."</p>
            </article>
            <article class="gridB">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#6366f1" fill-rule="evenodd"
                        d="M34.376 2.155a33.2 33.2 0 0 1 7.795-.63a2.4 2.4 0 0 1 2.305 2.305c.06 1.416.067 4.399-.63 7.795c-.41 2.003-2.819 2.546-4.147 1.217l-1.917-1.916a116 116 0 0 0-2.213 2.055c-1.891 1.801-4.263 4.182-6.264 6.559c-1.702 2.022-4.967 2.008-6.565-.23a94 94 0 0 0-3.148-4.17c-2.234 1.529-6.872 5.048-12.086 11.01q-.486.555-.976 1.138a2 2 0 0 1-3.06-2.577q.516-.61 1.024-1.193c5.59-6.392 10.587-10.152 12.993-11.784c1.683-1.141 3.891-.748 5.126.78a97 97 0 0 1 3.381 4.471a.1.1 0 0 0 .026.023a.2.2 0 0 0 .073.016a.19.19 0 0 0 .152-.06c2.136-2.537 4.626-5.032 6.564-6.879c.833-.793 1.57-1.473 2.141-1.99l-1.79-1.794c-1.329-1.328-.786-3.736 1.217-4.147m-.612 40.57c-.132-1.81-.264-5.039-.264-10.725s.132-8.914.264-10.726c.146-2.01 1.614-3.578 3.702-3.706c.664-.04 1.497-.068 2.534-.068s1.87.028 2.534.068c2.088.128 3.556 1.696 3.702 3.706c.132 1.812.264 5.04.264 10.726s-.132 8.914-.264 10.726c-.146 2.01-1.614 3.578-3.702 3.706c-.664.04-1.497.068-2.534.068s-1.87-.028-2.534-.068c-2.088-.128-3.556-1.696-3.702-3.706M1.67 43.27c-.097-.944-.17-2.304-.17-4.27s.073-3.326.169-4.27c.201-1.99 1.798-3.131 3.547-3.19A84 84 0 0 1 8 31.5c1.187 0 2.097.017 2.784.04c1.749.059 3.346 1.2 3.547 3.19c.096.944.169 2.304.169 4.27s-.073 3.326-.168 4.27c-.202 1.99-1.8 3.131-3.548 3.19c-.687.023-1.597.04-2.784.04s-2.097-.017-2.784-.04c-1.749-.059-3.346-1.2-3.547-3.19M17.5 36c0 3.411.099 5.564.213 6.917c.172 2.048 1.74 3.447 3.72 3.534c.664.029 1.506.049 2.567.049s1.903-.02 2.567-.05c1.98-.086 3.548-1.485 3.72-3.533c.114-1.353.213-3.506.213-6.917s-.099-5.564-.212-6.917c-.173-2.048-1.74-3.447-3.721-3.534c-.664-.029-1.506-.049-2.567-.049s-1.903.02-2.566.05c-1.981.086-3.55 1.485-3.722 3.533C17.6 30.436 17.5 32.589 17.5 36"
                        clip-rule="evenodd" />
                </svg>
                <p><span>Smart Stats:</span> "Track your progress effortlessly."</p>
            </article>
            <article class="gridC">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6366f1"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-cloud-computing">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M9 20a2 2 0 0 1 -2 2h-4a1 1 0 0 1 0 -2h4v-2.997l-.343 .001a1 1 0 0 1 -.117 -.007l-.105 -.001c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08c2.194 -.667 4.614 -.224 6.36 1.176c1.385 1.108 2.187 2.686 2.25 4.34l.004 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.478 -1.997 4.487 -4.465 4.487h-1.535v2.996h4a1 1 0 0 1 0 2h-4a2 2 0 0 1 -2 -2v-2.997h-2v3.997a1 1 0 0 1 -2 0v-3.997h-2z" />
                </svg>
                <p><span>Loomi Drive:</span> "Cloud storage integrated into your classes."</p>
            </article>
        </div>
    </section>
</template>
<style scoped>
.features {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 10%;
}

h2 {
    text-align: center;
    font-size: 3rem;
    font-family: var(--font-body);
}

.grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5rem;
    padding: 0 10%;
    box-sizing: border-box;
}

.gridA {
    grid-row: 1 / span 2;
    grid-column: 1;
}

.bento .b {
    grid-row: 1;
    grid-column: 2;
}

.bento .c {
    grid-row: 2;
    grid-column: 2;
}

article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--card-bg);
    border-radius: 20px;
    border: solid 2px var(--accent-primary);
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.6), 0 2px 6px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    transition: all .3s ease-out;
}

article:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(2, 6, 23, 0.6), 0 6px 12px rgba(0, 0, 0, 0.5);
}

article p {
    padding: 20px;
    font-family: var(--font-titles);
    font-weight: bold;
    width: 100%;
    background-color: var(--accent-primary);
    font-size: 1.3rem;
    text-align: left;
    margin: 0;
    line-height: 1.2;
    color: var(--text-main);
    flex-shrink: 0;
}

article svg {
    flex: 1;
    width: 35%;
    height: auto;
    margin: auto;
    padding: 2rem;
    display: block;
    filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6));
}

article p span {
    display: block;
    padding-bottom: 5px;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-family: var(--font-onest);
    letter-spacing: 1px;
    opacity: 0.9;
    color: var(--card-bg);
}

@media (max-width: 768px) {
    h2 {
        font-size: 2rem;
    }


    .grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 280px);
        padding: .2rem 10%;
        gap: 1.5rem;
    }

    .gridA,
    .gridB,
    .gridC {
        grid-row: auto;
        grid-column: auto;
    }

    article {
        width: 100%;
        height: 100%;
        justify-content: space-between;
    }

    article svg {
        width: 40%;
        max-height: 140px;
        padding: 1rem;
        margin: auto;
        display: block;
    }

    article p {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .8rem;
        padding: 7px;
        box-sizing: border-box;
    }

    article p span {
        font-size: 0.75rem;
        margin-bottom: 4px;
    }
}
</style>