export const loadState = () => {
    try {
        const localStorageState = localStorage.getItem('favoriteReducer')
        if (localStorageState === null) {
            return undefined
        }
        return JSON.parse(localStorageState)
    } catch (err) {
        console.log('Nao foi possivel recuperar o estado', err)
        return undefined
    }
}

export const saveState = state => {
    try {
        const localStorageState = JSON.stringify(state)
        localStorage.setItem('favoriteReducer', localStorageState)
    } catch (err) {
        console.log('Nao foi possivel salvar o estado', err);
    }
}