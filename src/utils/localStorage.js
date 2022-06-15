export const getData = (key) => localStorage.getItem(key)

export const addData = (key, data) => localStorage.setItem(key, data)

export const removeData = (key) => localStorage.removeItem(key)

export const clearData = () => localStorage.clear()