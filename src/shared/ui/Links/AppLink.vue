<template>
    <div class="text-orange-500 p-4 text-base font-bold
        hover:scale-105 hover:shadow-lg 
        transition-all duration-300 ease-in-out 
        sm:p-6 sm:text-lgmd:p-8 md:text-xl lg:p-10 lg:text-2xl"
    >
        <router-link :to="props.to"><slot /></router-link>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    to: string;
}>();
</script>
