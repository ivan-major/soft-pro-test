<template>
    <router-link
        :to="`/property/${props.data.id}`"
        class="flex flex-col justify-between bg-zinc-700 rounded-lg p-4 
            hover:shadow-lg hover:bg-zinc-600 
            transition-all duration-300 ease-in-out 
            sm:p-6 md:p-8 lg:p-10"
    >
        <img
            src="@/shared/assets/images/image-placeholder.png"
            :alt="props.data.name"
            class="w-full h-56 object-cover mb-4 rounded-md"
        />
        <div class="flex items-end justify-between">
            <div class="space-y-2">
                <h2 class="text-xl font-semibold text-orange-500
                    md:text-2xl"
                >
                    {{ props.data.name }}
                </h2>
                <p class="text-zinc-900
                    md:text-xl"
                >
                    {{ props.data.location }}
                </p>
            </div>
            <p class="text-orange-500 font-bold 
                text-xl md:text-2xl"
            >
                ${{ props.data.price }}
            </p>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import type { RealtyObject } from '@/entities/realty/types/realtyObject';
const props = defineProps<{
    data: RealtyObject;
}>();
</script>