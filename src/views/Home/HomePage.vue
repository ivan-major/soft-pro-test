<template>
    <AppPageContainer>
        <div class="w-full py-4
            sm:py-8
            md:py-10
            lg:py-12">
            <SearchInput placeholder="Search todos..." @search-input="handleSearchInput"/>
        </div>
        <div class="grid grid-cols-1 gap-4 py-4
            md:grid-cols-2 md:gap-8 md:py-8
            lg:grid-cols-3 lg:gap-10 lg:py-10"
        >
            <RealtyFrame
                v-for="item in realtyList"
                :key="item.id"
                :data="item"
            />
        </div>
        <HomePagePagination
            v-if="totalPages > 1"
            :current-page="currentPage"
            :total-items="totalPages"
            @page-changed="onChangePage"
        />
    </AppPageContainer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

import AppPageContainer from '@/shared/ui/Container/AppPageContainer.vue';
import RealtyFrame from '@/entities/realty/ui/RealtyFrame.vue';
import HomePagePagination from './ui/HomePagePagination.vue';
import SearchInput from '@/shared/ui/Inputs/SearchInput.vue';

import { useRealtyStore } from '@/entities/realty/model/store';
import { useSearchFilter } from './model/useSearchFilter';
import { getRealtyListToPage, scrollToTop } from '@/shared/utils/helpers';
import { REALTY_LIST } from '@/shared/staticData/staticData';

const realtyStore = useRealtyStore();
const {
    realtyList,
    totalRealtyList,
    currentPage,
    limit,
    totalPages
} = storeToRefs(realtyStore);
const { filterRealtyList } = useSearchFilter();

const onChangePage = (newPage: number) => {
    realtyStore.setCurrentPage(newPage);
    realtyStore.setRealtyList(getRealtyListToPage(totalRealtyList.value, newPage, limit.value));
    scrollToTop();
};

const handleSearchInput = (input: string) => {
    filterRealtyList(input);
}

onMounted(() => {
    realtyStore.setTotalRealtyList(REALTY_LIST);
    realtyStore.setRealtyList(getRealtyListToPage(totalRealtyList.value, currentPage.value, limit.value));
});
</script>