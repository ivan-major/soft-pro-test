<template>
    <AppPageContainer>
        <h1 class="text-2xl font-bold text-amber-600 text-center mb-6
            sm:text-3xl sm:mb-10
            md:text-4xl"
        >{{ propertyData?.name }}</h1>
        <div class="lg:grid lg:grid-cols-2 lg:gap-10">
            <div class="rounded-lg overflow-hidden h-72
                sm:h-96
                md:h-[500px]
            ">
                <RealtyMap v-if="propertyData" :data="propertyData" />
            </div>
            <div>
                <h3 class="text-lg font-semibold text-white text-center my-4
                    sm:text-xl sm:my-6
                    md:text-2xl md:my-8
                    lg:mt-0
                ">Details</h3>
                <p class="text-amber-600 my-4
                    sm:text-lg sm:my-6
                    md:text-xl md:my-8
                ">{{ propertyData?.description }}</p>
                <div class="flex justify-between">
                    <div class="flex flex-col gap-2">
                        <p class="text-lg font-semibold text-white
                            sm:text-xl
                            md:text-2xl
                        ">Location</p>
                        <p class="text-amber-600 font-bold text-xl
                            sm:text-2xl
                            md:text-3xl
                        ">{{ propertyData?.location }}</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-lg font-semibold text-white text-end
                            sm:text-xl
                            md:text-2xl
                        ">Price</p>
                        <p class="text-amber-600 font-bold text-xl
                            sm:text-2xl
                            md:text-3xl
                        ">${{ propertyData?.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </AppPageContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

import AppPageContainer from '@/shared/ui/Container/AppPageContainer.vue';
import RealtyMap from '@/entities/realty/ui/RealtyMap.vue';
import { useRouter } from 'vue-router';

import { useRealtyStore } from '@/entities/realty/model/store';

const router = useRouter();

const realtyStore = useRealtyStore();
const { totalRealtyList } = storeToRefs(realtyStore);

const propertyId = ref(Number(router.currentRoute.value.params.id));
const propertyData = computed(() => totalRealtyList.value.find(item => item.id === propertyId.value));
</script>
