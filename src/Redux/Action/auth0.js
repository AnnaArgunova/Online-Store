export const LOG_IN = 'LOG_IN';
export const logInAction = (user) => ({
    type: LOG_IN,
    user
})

export const LOG_OUT = 'LOG_OUT';
export const logOutAction = (user) => ({
    type: LOG_OUT,
    user
})