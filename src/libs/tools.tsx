import { formatDistance, subDays } from "date-fns"

export const dateVideo = (date: string): string => {
    const formatDate = formatDistance(new Date(date), new Date(), { addSuffix: true })
    return formatDate as string
}

export const countViews = (view: string): string => {
    const number = parseInt(view)
    var angka: string = ""
    if (number < 1000) {
        angka = number.toString();
    }

    // Jika angka di atas atau sama dengan 1 juta, tampilkan dalam format "1jt", "1rb", dst.
    if (number >= 1000000) {
        angka = `${(number / 1000000).toFixed(1)}jt`;
    } else if (number >= 1000) {
        angka = `${(number / 1000).toFixed(1)}rb`;
    }
    
    return angka
}

export function Capitalize(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getYtId(url: string): string{
    const urlYt = new URL(url)
    const params = new URLSearchParams(urlYt.search)
    return params.get('v') as string
}

export function shuffleArray(array: []) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}