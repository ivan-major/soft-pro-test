<template>
    <AppPageContainer>
        <div class="map h-[calc(100vh-72px)] py-4 rounded-lg overflow-hidden
            sm:h-[calc(100vh-124px)] sm:py-6
            md:h-[calc(100vh-176px)] md:py-8"
        >
            <MapRealty :data="totalRealtyList" />
        </div>
    </AppPageContainer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import AppPageContainer from '@/shared/ui/Container/AppPageContainer.vue';
import MapRealty from './ui/MapRealty.vue'
import { useRealtyStore } from '@/entities/realty/model/store';

const realtyStore = useRealtyStore();
const { totalRealtyList } = storeToRefs(realtyStore);
</script>

<style scoped lang="scss">
.map {
  :deep(.maplibregl-map) {
    border-radius: 0.5rem;
    overflow: hidden;
  }
}
</style>