import { DISPLAY_OPTIONS, DISPLAY_FORMAT_NAME } from "./constants";

function screen(context, selectedVersion, selectedScreen) {
    let details = []

    DISPLAY_OPTIONS.forEach(function (display_option) {
        if (context.getOption(display_option.id) && context.project[display_option.key]) {
            let obj = {
                "key": display_option.key,
                "label": display_option.label,
                "value": context.project[display_option.key]
            }
            if (display_option.filter) {
                obj.value = obj.value[display_option.filter]
            }

            details.push(obj)
        }
    })

    let result = {
        "json": {},
        "text": ""
    }

    details.forEach(function (detail) {
        result.json[detail.key] = detail.value
        result.text += `${detail.label}: ${detail.value}\n`
    })

    if (context.getOption(DISPLAY_FORMAT_NAME) == "json") {
        return {
            code: JSON.stringify(result.json, null, 2),
            language: "json"
        };
    }

    return result.text

}

export default {
    screen
};