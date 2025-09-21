import { storeToRefs } from 'pinia'
import { useRealtyStore } from '../model/store';

export const useSearchFilter = () => {
    const realtyStore = useRealtyStore();
    const { totalRealtyList, limit } = storeToRefs(realtyStore);

    const filterRealtyList = (searchTerm: string) => {
        const filteredList = totalRealtyList.value.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.location.toLowerCase().includes(searchTerm.toLowerCase())
        );

        realtyStore.setRealtyList(filteredList.slice(0, limit.value));
        realtyStore.setCurrentPage(1);
        realtyStore.setTotalPages(filteredList);
    };

    return {
        filterRealtyList,
    };
}