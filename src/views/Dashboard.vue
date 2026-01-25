<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { supabase } from '../supabaseClient.ts'
import { useRouter } from 'vue-router'
const router = useRouter()
const fullName = ref('Cargando...')

onMounted(async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
        router.push('/login')
        return
    }
    const { data: profile, error } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', session.user.id)
        .single()

    if (error) {
        console.error("Error recuperando perfil:", error)
        fullName.value = "user"
    } else if (profile) {
        fullName.value = profile.name
    }
})

</script>
<template>
    <main>
        <h1>HI, {{ fullName }}</h1>
    </main>
</template>
<style scoped>
main {
    height: 100dvh;
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>