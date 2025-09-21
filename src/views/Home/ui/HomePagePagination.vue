<template>
    <div class="flex justify-center space-x-4 px-4 py-6
        sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12"
    >
        <AppButton
            v-for="value in totalItems"
            :key="value"
            :disabled="value === props.currentPage"
            @on-click="onChangePage(value)"
        >
            {{ value }}
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppButton from '@/shared/ui/Buttons/AppButton.vue';

const props = defineProps<{
    totalItems: number;
    currentPage: number;
}>();

const emit = defineEmits<{
    (e: 'page-changed', newPage: number): void;
}>();

const onChangePage = (newPage: number) => {
    emit('page-changed', newPage);
};
</script>
