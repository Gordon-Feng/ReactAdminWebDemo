// reducer 负责更新 state 值
const isSpinning = (isSpinning = false, action) => {
    switch (action.type) {
        case 'TRIGGER_SPIN':
            return !isSpinning

        default:
            return false
    }
}

export default isSpinning