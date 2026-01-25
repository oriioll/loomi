<script setup lang="ts">
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
import { supabase } from '../supabaseClient.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
        router.push('/login') //If not logged in, go back to login
    }
})
</script>
<template>
    <main>
        <h1>dev...</h1>
    </main>
</template>
<style scoped></style>