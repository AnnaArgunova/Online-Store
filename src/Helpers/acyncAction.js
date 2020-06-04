export const createAcyncAction = (actionType) => {
    return {
        SUCCESS: `${actionType}.SUCCESS`,
        FAILURE: `${actionType}.FAILURE`,
        REQUEST: `${actionType}.REQUEST`,
    }
}