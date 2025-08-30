export const thousandsSeparator = (num: number, sep: string = ','): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}