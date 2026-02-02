<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goToGithub = () => {
    window.open('https://github.com/oriioll/loomi');
}

</script>
<template>
    <footer class="footer">
        <div class="footerInfo">
            <div class="text">
                <h3>Loomi</h3>
                <p>Building the future of classroom management</p>
            </div>
            <div class="info">
                <div class="status">
                    <div class="dot"></div>
                    <p>All systems operational</p>
                </div>
                <svg @click="goToGithub" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                    <path fill="currentColor"
                        d="M8 0C3.582 0 0 3.672 0 8.203c0 3.624 2.292 6.698 5.471 7.783c.4.075.546-.178.546-.396c0-.194-.006-.71-.01-1.395c-2.226.496-2.695-1.1-2.695-1.1c-.364-.947-.888-1.199-.888-1.199c-.727-.509.055-.499.055-.499c.803.059 1.225.846 1.225.846c.713 1.253 1.872.89 2.328.681c.073-.53.28-.891.508-1.096c-1.776-.207-3.644-.911-3.644-4.054c0-.896.312-1.628.824-2.201c-.083-.208-.357-1.042.078-2.171c0 0 .671-.22 2.2.84A7.5 7.5 0 0 1 8 3.967c.68.004 1.364.095 2.003.277c1.528-1.062 2.198-.841 2.198-.841c.436 1.13.162 1.963.08 2.17c.512.574.822 1.306.822 2.202c0 3.15-1.87 3.844-3.653 4.047c.288.253.543.754.543 1.52c0 1.096-.01 1.98-.01 2.25c0 .219.144.474.55.394C13.71 14.898 16 11.825 16 8.203C16 3.673 12.418 0 8 0" />
                </svg>
            </div>
        </div>
        <div class="copy">
            <p>Copyright © 2026 Loomi. Made with by @oriioll</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    padding: 60px 10% 30px;
    border-top: 1px solid var(--card-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.footerInfo {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}

.text h3 {
    color: var(--accent-primary);
    font-size: 1.5rem;
    font-family: var(--font-titles);
}

.text p {
    color: var(--text-muted);
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    svg {
        color: var(--text-main);
        transition: color .25s ease;

    }

    svg:hover {
        color: var(--accent-primary);
        cursor: pointer;
    }
}

.status {
    font-size: 0.8rem;
    color: var(--accent-secondary);
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(16, 185, 129, 0.1);
    padding: 6px 12px;
    border-radius: 20px;
}

.dot {
    width: 6px;
    height: 6px;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 8px currentColor;
}

.copy {
    color: var(--text-muted);
    font-size: .8rem;
}

@media (max-width: 768px) {
    .text p {
        font-size: .7rem;
        margin: 0;
    }

    .copy {
        font-size: .7rem;
    }

    .status {
        font-size: 0.7rem;
        color: var(--accent-secondary);
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(16, 185, 129, 0.1);
        padding: 6px 12px;
        border-radius: 20px;
    }

    .dot {
        width: 0;
    }
}
</style>