<template>
    <mgl-map
    :map-style="MAP_STYLE"
    :center="coordinates"
    :zoom="zoom"
    height="500px"
  >
    <mgl-marker :coordinates="coordinates">
      <template v-slot:marker>
        <div :style="{ backgroundColor: 'red', width: '10px', height: '10px' }"></div>
      </template>
    </mgl-marker>
  </mgl-map>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MglMap, MglMarker } from '@indoorequal/vue-maplibre-gl';
import { MAP_STYLE } from '../utils/mapStyle';
import type { RealtyObject } from '../types/realtyObject';

const props = defineProps<{
    data: RealtyObject;
}>();

const coordinates = computed<[number, number]>(() => {
  const coords = props.data.geometry.coordinates;
  return Array.isArray(coords) && coords.length === 2 ? [coords[0], coords[1]] : [0, 0];
});

const zoom = 12;
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>