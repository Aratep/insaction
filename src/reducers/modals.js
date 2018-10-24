const modalsState = {
    auth: false,
    registration: false,
    job: false,
    overlay: false,
    settings: false,
    payment: false,
    aside: false,
    overlay_aside: false,
    preview: false,
    voice_message: false,
    voice_animation: false
};

export default function modals(state = modalsState, action) {
    if (action.type === "SHOW_AUTH") {
        return {
            ...state,
            auth: true,
            overlay: true
        };
    } else if (action.type === "SHOW_REGISTRATION") {
        return {
            ...state,
            registration: true,
            overlay: true
        };
    } else if (action.type === "HIDE_ALL") {
        return {
            auth: false,
            registration: false,
            overlay: false,
            overlay_aside: false,
            aside: false,
            job: false,
            settings: false,
            payment: false,
            preview: false,
            voice_message: false,
            voice_animation: false
        };

    } else if (action.type === "HIDE_AUTH") {
        return {
            auth: false,
            overlay: false
        };

    } else if (action.type === "SHOW_JOB") {
        return {
            ...state,
            job: true,
            overlay: true
        };

    } else if (action.type === "SHOW_SETTINGS") {
        return {
            ...state,
            settings: true,
            overlay: true
        };

    } else if (action.type === "SHOW_PAYMENT") {
        return {
            ...state,
            payment: true,
            overlay: true
        };

    } else if (action.type === "SHOW_ASIDE") {
        return {
            ...state,
            aside: true,
            overlay_aside: true
        };
    } else if (action.type === "SHOW_PREVIEW") {
        return {
            ...state,
            preview: true,
            overlay: true
        };
    } else if (action.type === "SHOW_VOICE_MESSAGE") {
        return {
            ...state,
            voice_message: true
        };
    }  else if (action.type === "HIDE_VOICE_MESSAGE") {
        return {
            ...state,
            voice_message: false
        };
    } else if (action.type === "SHOW_VOICE_ANIMATION") {
        return {
            ...state,
            voice_animation: true
        };
    }


    return state;
}
