<template>
  <div class="login-page">
    <header>
      <h1>Loomi</h1>
      <p>Next-gen classroom management</p>
    </header>
    <main>
      <section class="login">
        <form class="loginForm" id="loginForm" @submit.prevent="handleLogin">
          <div class="buttons">
            <button type="button" id="signIn" class="active">Sign In</button>
            <RouterLink to="/register">
              <button type="button" id="signUp">Sign Up</button>
            </RouterLink>
          </div>

          <TransitionGroup name="staggered" appear>
            <div class="email" id="emailContainer" key="email-input">
              <input v-model="email" type="text" name="email" id="email" placeholder="Type your Email...">
            </div>
            <div class="password" id="passwordContainer" key="pass-input">
              <!--Changes between type text and password-->
              <input v-model="password" :type="passwordTypeText ? 'text' : 'password'"
                placeholder="Password 8 chars with numbers">
              <svg @click="alterPassword" id="seePassword" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
            </div>
            <div class="role" id="role" style="display: none;">
              <p>Are you a teacher?</p>
              <input type="checkbox" id="teacher" class="teacher" name="teacher">
            </div>
            <span v-if="authErrorMessage" id="errorMessage" style="display: block;">{{ authErrorMessage }}</span>
            <button key="submit-btn" type="submit" class="submitBtn" :class="canSubmit ? 'btnReady' : 'btnNotReady'"
              :disabled="!canSubmit" id="submitBtn">Sign In</button>
          </TransitionGroup>
        </form>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from '../supabaseClient.ts'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const password = ref('')
const passwordTypeText = ref(false)
const authErrorMessage = ref('') // Variable para el mensaje de error

// Solo validamos que no estén vacíos en el Login (o usa regex si quieres ser estricto)
const canSubmit = computed(() => {
  return email.value.trim() !== '' && password.value.trim() !== ''
})

function alterPassword() {
  passwordTypeText.value = !passwordTypeText.value
}

/**
 * Function that uses supabase auth.users premade table and signInWithPassword to login
 */
async function handleLogin() {
  if (!canSubmit.value) return
  authErrorMessage.value = ''

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    console.error(error)
    // Aplicamos tu lógica de mensajes personalizados
    if (error.message.includes("Email not confirmed")) {
      authErrorMessage.value = "Please confirm your email."
    }
    else if (error.message.includes("Invalid login credentials")) {
      authErrorMessage.value = "Incorrect email or password."
    }
    else {
      authErrorMessage.value = "An unexpected error occurred. Please try again."
    }
    return
  } else {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.login-page {
  width: 100dvw;
  height: 100dvh;
  font-size: 16px;
  font-family: var(--font-body);
  background:
    /* Reflejo superior "Gris Platino" - Simula una luz de estudio */
    radial-gradient(circle at 50% -10%, rgba(255, 255, 255, 0.06), transparent 40%),
    /* Brillo lateral sutil - Da volumen al fondo */
    radial-gradient(circle at 100% 40%, rgba(255, 255, 255, 0.03), transparent 30%),
    /* Luz de profundidad inferior - Evita que el fondo se vea "muerto" */
    radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.02), transparent 40%),
    /* El degradado de base: de Negro Absoluto a Gris Carbón muy oscuro */
    linear-gradient(180deg, #000000 0%, #080808 100%);
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


/* header styles */
header {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: var(--font-titles);
}

header h1 {
  font-size: 4rem;
}

header p {
  font-size: 1.5rem;
}

/*login main styles*/
main {
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
}

section.login {
  height: 90%;
  width: 60%;
}

/*Form and button styles*/
.loginForm {
  width: 100%;
  height: 100%;
  background-color: var(--card-bg);
  border-radius: 20px;
  border: solid 2px var(--card-border);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.6), 0 2px 6px rgba(0, 0, 0, 0.35);
  transition: all .3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding-bottom: 20px;
}

.loginForm:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.6), 0 6px 12px rgba(0, 0, 0, 0.5);
}

.loginForm .buttons {
  width: 100%;
  height: 15%;
  display: flex;
}

.buttons button {
  width: 50%;
  height: 100%;
  border: transparent;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.25rem;
  font-family: var(--font-titles);
  font-weight: bold;
  color: var(--text-main);
}

.buttons #signIn {
  border-radius: 20px 0 0 0;
}

.buttons #signUp {
  border-radius: 0 20px 0 0;
}

.buttons .active {
  background-color: rgba(99, 102, 241, 0.1);
}


/*Input styles*/
.email,
.password,
.username {
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px var(--card-border);
  transition: all .3s ease-out;
}

.password svg {
  transition: all .3s ease;
}

.password svg:hover {
  transform: scale(1.25);
  cursor: pointer;
  color: var(--accent-primary);
}

.email input,
.password input,
.username input {
  height: 100%;
  width: 90%;
  background-color: transparent;
  border: none;
  color: var(--text-main);
  font-size: 1rem;
  font-family: 'Poppins';
  transition: all .15s ease-out;
}

.loginForm input:focus-visible {
  outline: none;
}

.loginForm input:active-visible {
  outline: none;
}

.email:focus-within,
.password:focus-within,
.username:focus-within {
  border-bottom: solid 2px var(--accent-primary);
}

/*If its error*/
.errorTypeInput {
  border-bottom: solid 2px var(--accent-error);
}

.errorTypeInput:focus-within {
  border-bottom: solid 2px var(--accent-error);
}

.loginForm .role {
  width: 50%;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

/* Checkbox tweaks: slightly larger and styled when clicked */
.loginForm .role input[type="checkbox"] {
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  cursor: pointer;
  accent-color: var(--accent-primary);
  transition: transform .3s ease-out;
  transform-origin: center;
  -webkit-appearance: auto;
  appearance: auto;
}

/* Slight hover scale to hint interactivity */
.loginForm .role input[type="checkbox"]:hover {
  transform: scale(1.08);
}

/* Focus outline for accessibility */
.loginForm .role input[type="checkbox"]:focus-visible {
  outline: none;
  box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.12);
  border-radius: 4px;
}


/* Error message*/
span#errorMessage {
  color: var(--accent-error);
  font-size: .8rem;
  font-family: var(--font-body);
  width: 50%;
  text-align: center;
}

span#errorMessage.successfull {
  color: var(--accent-secondary);
}

/* Submit btn styles */

.loginForm .submitBtn {
  border: none;
  background-color: var(--accent-primary);
  color: var(--text-main);
  font-size: 1.25rem;
  font-family: var(--font-titles);
  font-weight: bold;
  padding: 14px 28px;
  border-radius: 15px;
  transition: all .3s ease;
  box-shadow: 0px 4px 8px rgba(2, 6, 23, 0.6);
}

.btnNotReady {
  opacity: .5;
  cursor: not-allowed;
}

.btnReady {
  opacity: 1;
  cursor: pointer;
  transition: all .3s ease-out;
}

.btnReady:hover {
  transform: scale(1.1);
}


/*RESPONSIVE MEDIA QUERIES*/
@media (max-width: 768px) {
  header h1 {
    font-size: 3rem;
  }

  header p {
    font-size: 1.1rem;
  }

  main {
    height: 65%;
  }

  section.login {
    width: 100%;
    padding: 10px;
  }

  .loginForm {
    padding-bottom: 20px;
  }

  .email,
  .password,
  .username {
    width: 85%;
    height: 100%;
    height: 50px;
  }

  .loginForm .submitBtn,
  .buttons button {
    font-size: 1rem;
  }

  .loginForm input,
  .role {
    font-size: .8rem;
  }

  .password svg:hover {
    cursor: pointer;
    color: var(--accent-primary);
  }

  .password svg {
    transform: scale(0.85);
  }

}

/*
fix btns links
*/
/* Esto hace que el enlace ocupe el espacio que le toca al botón */
.buttons a {
  width: 50%;
  height: 100%;
  display: block;
  /* O inline-block */
  text-decoration: none;
  /* Quita el subrayado típico de los links */
}

/* Ajusta el botón dentro del link para que rellene el 100% de ese 50% */
.buttons a button {
  width: 100%;
  height: 100%;
}

/*animations*/
.staggered-enter-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.staggered-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.staggered-enter-active:nth-child(2) {
  transition-delay: 0.05s;
}

.staggered-enter-active:nth-child(3) {
  transition-delay: 0.1s;
}

.staggered-enter-active:nth-child(4) {
  transition-delay: 0.15s;
}
</style>
