/* eslint-disable quote-props */
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12
    },
    plugins: [
        // ...
        'react-hooks'
    ],
    rules: {
        'indent': [
            'error', 4
        ],
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
    },
    globals: {
        '__DEV__': true,
        __WECHAT__: true,
        '__ALIPAY__': true,
        'App': true,
        'Page': true,
        'Component': true,
        'Behavior': true,
        'wx': true,
        'getApp': true,
        'getCurrentPages': true
    }
}
