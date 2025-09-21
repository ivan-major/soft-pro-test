<template>
    <div class="relative">
        <input
            ref="input"
            v-model="prompt"
            class="w-full h-10
                sm:h-12 md:h-14
                pr-8 sm:pr-10 md:pr-12
                text-lg sm:text-xl md:text-2xl
                font-extrabold
                text-white
                border-b-2 border-amber-500
                focus:border-amber-200
                focus:outline-none
                caret-amber-500
                transition-all duration-300 ease-in-out"
            type="search"
            :placeholder="placeholder"
            @input="handleInput"
        >

        <div class="absolute top-1/2 right-0 translate-y-[-50%] w-6 h-6
            sm:w-8 sm:h-8 md:w-10 md:h-10">
            <IconSearch class="stroke-amber-500"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import { debounce } from '@/shared/utils/helpers.js'

const emit = defineEmits(['search-input'])

defineProps<{
    placeholder: string
}>()

const input = ref(null)
const prompt = ref('')

const handleInput = debounce(async () => {
    const string = prompt.value.trim()

    emit('search-input', string)
})
</script>
