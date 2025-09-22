<template>
    <div class="flex items-center justify-center gap-4 px-6 py-2
        sm:px-8 sm:py-4 md:px-10 md:py-6 lg:px-12 lg:py-8"
    >
        <AppLMenuLink
            v-for="link in HEADER_MENU"
            :key="link.link"
            :to="link.link"
        >
            {{ link.title }}
        </AppLMenuLink>
    </div>
</template>

<script setup lang="ts">
import AppLMenuLink from '@/shared/ui/Links/AppLMenuLink.vue';
import { HEADER_MENU } from "../data/variables";
</script>

<style scoped>

</style>