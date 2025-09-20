<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppContainer from '@/shared/ui/Container/AppContainer.vue'
</script>

<template>
    <div class="bg-zinc-800">
        <AppContainer>
            <RouterView />
        </AppContainer>
    </div>
    <MediaModal />
</template>
