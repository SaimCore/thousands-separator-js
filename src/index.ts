export const thousandsSeparator = (num: number, sep = ',') => {
    try {
        if (sep) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
        }

        return num.toString();
    } catch (error) {
        console.error(error);
    }
}