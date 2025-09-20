<template>
    <div class="min-h-screen">
        <HeaderLinks />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderLinks from '@/widgets/Header/ui/HeaderLinks.vue'
</script>
