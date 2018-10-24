const switchState = {
    switched: false
};

export default function modals(state = switchState, action) {
    if (action.type === "SWITCH_USER") {
        return {
            ...state,
            switched: state.switched ? false : true,
        };
    }

    return state;
}
