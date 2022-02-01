/**
 * get pagenation array
 * @param {Array} arr 
 * @param {String} size 
 * @returns 
 */
export function paginate(arr, size = 10) {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        let page = acc[idx] || (acc[idx] = [])
        page.push(val)

        return acc
    }, [])
}