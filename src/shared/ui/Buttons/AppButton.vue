<template>
    <button 
        class="bg-orange-500 text-white font-semibold px-4 py-2 text-base rounded-lg
             hover:shadow-lg
            transition-all duration-300 ease-in-out
            sm:p-6 sm:text-lg md:p-8 md:text-xl lg:p-10 lg:text-2xl"
        :class="classes"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    disabled?: boolean;
}>();
const emit = defineEmits<{
    (e: 'on-click'): void;
}>();

const onClick = () => {
    emit('on-click');
};

const classes = computed(() => {
    return {
        'opacity-50 cursor-auto hover:scale-100': props.disabled,
        'cursor-pointer hover:scale-105': !props.disabled,
    };
});
</script>
