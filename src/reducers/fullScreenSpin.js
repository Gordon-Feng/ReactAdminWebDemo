// reducer 负责更新 state 值
const fullScreenSpin = (fullScreenSpin = false, action) => {
    switch (action.type) {
        case 'FULL_SCREEN_SPIN':
            return !fullScreenSpin

        default:
            return fullScreenSpin
    }
}

export default fullScreenSpin