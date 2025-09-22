<template>
  <mgl-map
    :map-style="MAP_STYLE"
    :center="mapCenter"
    :zoom="zoom"
    height="100%"
  >
    <mgl-marker
      v-for="obj in data"
      :key="obj.id"
      :coordinates="obj.geometry.coordinates"
    >
      <template #marker>
        <div
          class="flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
          style="width: 24px; height: 24px;"
          :title="obj.name"
          @click="goToRealtyObject(obj.id)"
        >
          •
        </div>
      </template>
    </mgl-marker>
  </mgl-map>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { MglMap, MglMarker } from '@indoorequal/vue-maplibre-gl'
import { MAP_STYLE } from '@/entities/realty/utils/mapStyle'
import type { RealtyObject } from '@/entities/realty/types/realtyObject'

const props = defineProps<{
  data: RealtyObject[]
}>()

const router = useRouter()

const goToRealtyObject = (id: number) => {
  router.push(`/property/${id}`)
}

const mapCenter = computed<[number, number]>(() => {
  if (props.data.length > 0) {
    return props.data[0].geometry.coordinates as [number, number]
  }
  return [30.5234, 50.4501]
})

const zoom = 12
</script>

<style lang="scss">
@import "maplibre-gl/dist/maplibre-gl.css";
</style>
