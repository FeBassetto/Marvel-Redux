export const Types = {
    CHANGE_COLOR: 'theme/CHANGE_COLOR'
}

export const themeActions = {
    changeColor: color => ({
        type: Types.CHANGE_COLOR,
        payload:{
            color
        }
    })
}