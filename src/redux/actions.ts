export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
    payload: {
        amountOfBYN: string,
        amountOfCurrency: string,
    }
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
};

// @ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: {amountOfBYN, amountOfCurrency},
    }
};

export type ChangeAction = {
    payload: {
        isBuying: boolean
    },
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
};

// @ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: {
            isBuying
        }}
};

export type ChangeCurrentCurrencyType = {
    payload: {
        currentCurrency: string
    },
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
};

// @ts-ignore
export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        payload: {
            currentCurrency
        },
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY}
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;
