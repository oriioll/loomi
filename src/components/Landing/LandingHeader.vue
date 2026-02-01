<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

</script>
<template>
    <header>
        <h2><a class="mainTitle" href="/home">Loomi</a></h2>
        <ul>
            <li id="features">
                <a class="navLink" href="#features">Features</a>
            </li>
            <li id="pricing">
                <a class="navLink" href="#pricing">Pricing</a>
            </li>
            <li id="about">
                <a class="navLink" href="#about">About</a>
            </li>
            <li class="login">
                <a class="login" role="button" @click="router.push('/login')">Sign In</a>
            </li>
            <li class="register">
                <a class="register" role="button" @click="router.push('/register')">Get Started</a>
            </li>
        </ul>
    </header>
</template>
<style scoped>
h2 {
    font-family: var(--font-titles);
}

header {
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
}

a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
}

.navLink {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
}



.navLink::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    /* Ajusta la distancia del subrayado */
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.navLink:hover::after {
    width: 100%;
}

header .mainTitle {
    color: var(--accent-primary);
    font-size: 2.25rem;
}

a.register {
    background-color: var(--accent-primary);
    padding: 14px;
    border-radius: 50px;
    font-weight: 500;

}

.register {
    box-shadow:
        0 4px 12px rgba(var(--accent-primary-rgb), 0.18),
        0 2px 6px rgba(var(--accent-primary-rgb), 0.12);
    transition: all .3s ease-out;
}

a.register:hover {

    box-shadow:
        0 4px 14px rgba(99, 102, 241, 0.30),
        0 2px 8px rgba(99, 102, 241, 0.18);
}

li.register:hover {
    transform: translateY(-2px);
}

a.login {
    padding: 14px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);

}

.login {
    padding-left: 50px;
    transition: 0.3s ease;
}

a.login:hover {
    box-shadow:
        0 0 6px rgba(255, 255, 255, 0.10),
        0 0 12px rgba(255, 255, 255, 0.06);

}

li.login:hover {
    transform: translateY(-2px);
}

a[role="button"] {
    cursor: pointer;
}

/**
RESPONSIVE MEDIA QUERIES
*/

@media (max-width: 1100px) {
    ul {
        gap: 2rem;
    }

    .login {
        padding-left: 25px;
    }
}

@media (max-width: 700px) {
    ul {
        gap: 1rem;
    }

    header {
        padding: 20px;
    }

    a {
        font-size: 0.75rem;
    }

    header .mainTitle {
        font-size: 1.25rem;
    }

    a.login {
        padding: 7px 10px;
        border-radius: 40px;
    }

    .login {
        padding-left: 0px;
    }

    a.register {
        padding: 7px 10px;
        border-radius: 40px;
        font-size: 0.75rem;
    }

    #pricing,
    #features,
    #about {
        display: none;
    }
}
</style>