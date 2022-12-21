module.exports = {
    extends: ["stylelint-config-standard-scss"],
    plugins: ["stylelint-scss", "stylelint-order"],
    rules: {
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "number-leading-zero": 'never',
        "order/properties-alphabetical-order": true,
        "selector-class-pattern": null
    }
};