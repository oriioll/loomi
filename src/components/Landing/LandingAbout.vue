<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

</script>
<template>
    <section class="about" id="about">
        <div class="text">
            <h2>More than just a tool, <br><span>a new way of learning.</span></h2>
            <p>
                We believe that technology should empower education, not complicate it.
                Loomi is the result of thousands of hours of feedback from teachers
                who wanted a cleaner, faster, and smarter way to manage their daily workflow.
            </p>
        </div>
        <div class="stats">
            <div class="stat">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                    <path fill="#6366f1"
                        d="M152.3 60c46.2-80 161.7-80 207.9 0l37.3 64.6l27.7-16c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3L436.9 223c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l27.7-16l-37.3-64.6c-21.6-37.3-75.4-37.3-97 0l-5.3 9.1c-8.8 15.3-28.4 20.5-43.7 11.7S138.2 84.5 147 69.1zm297.4 219.1c15.3-8.8 34.9-3.6 43.7 11.7l5.3 9.1c46.2 80-11.5 180-103.9 180h-74.6v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32h74.6c43.1 0 70.1-46.7 48.5-84l-5.3-9.1c-8.8-15.3-3.6-34.9 11.7-43.7zM51 235.4l-27.7-16c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.5c12.8-3.4 26 4.2 29.4 17l23.4 87.4c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-27.7-16L69.1 332c-21.6 37.3 5.4 84 48.5 84h10.6c17.7 0 32 14.3 32 32s-14.3 32-32 32h-10.6c-92.3 0-150-100-103.8-180z" />
                </svg>
                <p><span>100% </span>Paperless</p>
            </div>
            <div class="stat">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14">
                    <g fill="none" stroke="#6366f1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7" />
                        <path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z" />
                    </g>
                </svg>
                <p><span>90% </span>Less Clutter</p>
            </div>
        </div>
    </section>
</template>
<style scoped>
.about {
    width: 75%;
    padding: 20px 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
}

.stats {
    display: flex;
    gap: 2rem;
}

.stat {
    padding: 14px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);

    p {
        margin: 0;
        color: var(--accent-primary);
        font-weight: 600;
        font-family: var(--font-titles);
    }

    span {
        color: var(--text-main);
        font-weight: 800;
    }

    svg {
        filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.3))
    }


}

h2 {
    font-size: 2.5rem;
    margin-top: 1rem;
    line-height: 1.2;
}

h2 span {
    color: var(--accent-primary);
}

p {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    color: var(--text-muted);
    font-family: var(--font-body);
}



@media (max-width: 768px) {
    h2 {
        font-size: 2rem;
    }

    p {
        font-size: .9rem;
    }

    .about {
        width: 90%;
    }
}
</style>