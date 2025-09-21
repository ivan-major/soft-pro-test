import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { RealtyObject } from '@/entities/realty/types/realtyObject'

export const useRealtyStore = defineStore('realty-store', () => {
    const totalRealtyList = ref<RealtyObject[]>([])
    const realtyList = ref<RealtyObject[]>([])
    const limit = ref<number>(10)
    const currentPage = ref<number>(1)
    const totalPages = ref<number>(0)

    const setTotalPages = (list: RealtyObject[]) => {
        totalPages.value = Math.ceil(list.length / limit.value)
    }

    const setTotalRealtyList = (list: RealtyObject[]) => {
        totalRealtyList.value = list
        setTotalPages(list)
    }

    const setRealtyList = (list: RealtyObject[]) => {
        realtyList.value = list
    }

    const setCurrentPage = (page: number) => {
        currentPage.value = page
    }

    return {
        totalRealtyList,
        realtyList,
        totalPages,
        currentPage,
        limit,

        setRealtyList,
        setTotalRealtyList,
        setCurrentPage,
        setTotalPages,
    }
})
