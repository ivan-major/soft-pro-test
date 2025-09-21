import type { RealtyObject } from '@/entities/realty/types/realtyObject';

export const getRealtyListToPage = (list: RealtyObject[], page: number, limit: number): RealtyObject[] => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return list.slice(startIndex, endIndex);
}

export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    timeout = 300
): (...args: Parameters<T>) => void => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return function (this: unknown, ...args: Parameters<T>) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}