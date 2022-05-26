//Helpers

export function returnFavorites(contents, type) {
    let data = []

    contents.map(content => {
        data = [...data, { ...content, favorited: false, type: type }]
    })

    return data
}

export function verifyFavorites(contents, favorites) {
    let data = []

    contents.map(content => {
        if (favorites.find(favorite => favorite.id === content.id)) {
            data = [...data, { ...content, favorited: true }]
        } else {
            data = [...data, { ...content, favorited: false }]
        }

    })

    return data
}

export function verifyState(state, type, everyStates) {

    if(state === false) return {...everyStates, [type]:false}

    const typesSelects = ['nameAlf', 'nameCronic', 'modifiedDec', 'modifiedCre']

    let newSelect = {}
    typesSelects.map(actualState => {
        if(actualState !== type) newSelect = {...newSelect, [actualState]: false}
        if(actualState === type) newSelect = {...newSelect, [actualState]: true}
    })

    return newSelect
}