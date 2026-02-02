<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

</script>
<template>
    <section class="pricing" id="pricing">
        <h2>Pricing</h2>
        <div class="pricingContainers">
            <article class="freePlan">
                <h4>INDIVIDUAL</h4>
                <div class="cardInfo">
                    <h3>Starter</h3>
                    <h3 class="price"><span class="overline">12€</span> 0€ / month</h3>
                </div>
                <p class="slogan">Everything you need to organize your study life</p>
                <p><span class="features">Features</span></p>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>Weekly overview Smart Stats</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>Up to 5 Workspace Boards</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>2GB Loomi Drive Storage</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>Community support</li>
                </ul>
                <button>Get Started for Free</button>
            </article>
            <article class="paidPlan">
                <h4>MOST POPULAR</h4>
                <div class="cardInfo">
                    <h3>Pro</h3>
                    <h3 class="price"><span class="overline">21€</span> 9€ (Disabled now)</h3>
                </div>
                <p class="slogan">Total control and unlimited power for high-achievers.</p>
                <p><span class="features">Features</span></p>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>Advanced Analytics</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>Unlimited Workspace Boards</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>10GB Loomi Drive Storage</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#6366f1"
                                d="M7.275 2.938c.221-.22.463-.408.762-.53a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748zm7.45 5.923l-3.597 4.981a.25.25 0 0 1-.391.018l-1.506-1.72a.75.75 0 1 0-1.129.987l1.506 1.721a1.75 1.75 0 0 0 2.736-.128l3.597-4.98a.75.75 0 1 0-1.216-.88" />
                        </svg>VIP support</li>
                </ul>
                <button>Go pro now</button>
            </article>
        </div>
    </section>
</template>
<style scoped>
h2 {
    text-align: center;
    font-size: 3rem;
}

.pricing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
}

.pricingContainers {
    display: flex;
    justify-content: center;
    gap: .5rem;
}

article {
    padding: 0.5rem 1.7rem;
    width: 30%;
    background-color: var(--card-bg);
    border-radius: 20px;
    border: solid 2px var(--accent-primary);
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.6), 0 2px 6px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    transition: all .2s ease-in;
    text-align: center;
}

article:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(2, 6, 23, 0.6), 0 6px 12px rgba(0, 0, 0, 0.5);
}

article h4 {
    color: var(--text-muted);
    padding-bottom: 5px;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-family: var(--font-onest);
    letter-spacing: 1px;
    opacity: 0.9;
}

.cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

article h3 {
    color: var(--accent-primary);
    font-weight: bold;
    font-size: 1.2rem;
    font-family: var(--font-titles);
    filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))
}

.overline {
    text-decoration: line-through;
    color: var(--text-muted);
}

.price {
    color: var(--text-main);
    font-size: 1rem;
    font-weight: 600;
    filter: none;
}

.slogan {
    font-size: .9rem;
    font-family: var(--font-body);
}

.features {
    color: var(--text-muted);
    font-weight: bold;
    padding-bottom: 5px;
    font-size: .9rem;
    text-transform: uppercase;
    font-family: var(--font-onest);
    letter-spacing: 1px;
    opacity: 0.9;
}

ul {
    font-size: .9rem;
    text-align: left;
    padding-left: 1rem;
    list-style-type: none;
}

li {
    display: flex;
    align-items: center;
    gap: 10px;
}

li svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
}

button {
    padding: 6px 12px;
    font-family: var(--font-titles);
    font-weight: 700;
    background-color: var(--accent-primary);
    color: var(--text-main);
    border: transparent;
    border-radius: 7px;
    font-size: 1rem;
    transition: all .25s ease-in;
    background: var(--accent-primary);
}

button:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(var(--accent-primary-rgb), .25);
    background: color-mix(in srgb, var(--accent-primary) 85%, white);
}

/*Make price card unavailable*/
.paidPlan {
    filter: opacity(.3);
}

.paidPlan button {
    pointer-events: none;

}

.paidPlan button:hover {
    pointer-events: none;
    transform: none;
    cursor: not-allowed;
}

.paidPlan:hover {
    transform: translate(0);
}

@media (max-width: 768px) {
    h2 {
        font-size: 2rem;
    }

    button {
        padding: 6px 12px;
        font-size: .8rem;
        transition: all .25s ease-in;
        background: var(--accent-primary);
    }

    ul {
        font-size: .7rem;
        padding-left: .5rem;
    }

    article {
        padding: 0.3rem 1rem;
        width: 40%;
        gap: .5rem;
    }

    article h4 {
        font-size: .8rem;
    }

    article h3 {
        font-size: 1.1rem;
    }


    .price {
        font-size: .9rem;
    }

    .slogan {
        font-size: .8rem;
        margin: 0;
        font-family: var(--font-body);
    }

    .features {
        padding-bottom: 5px;
        font-size: .7rem;
    }

    ul {
        font-size: .7rem;
        text-align: left;
        padding-left: .3rem;
        list-style-type: none;
    }

    li {
        padding-bottom: 5px;
    }

    button {
        padding: 5px 10px;
        font-family: var(--font-titles);
        font-weight: 600;
        font-size: .7rem;
    }

}
</style>