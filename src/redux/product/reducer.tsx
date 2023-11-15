import actions from "./actions";

const initState = {
    loading: false,
    products: [],
    errrors: null,
};

const ProductReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case actions.types.LOAD_DATA:
            return {
                ...state,
                loading: true,
            };
        case actions.types.LOAD_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                ... { products: action.payload.products },

            };
        case actions.types.SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.payload.selectedPage,
            };
        case actions.types.ADD_PRODUCT:
            return {
                ...state,
            }
        case actions.types.SET_INFO_PRODUCT:
            return {
                ...state,
                infoProduct: action.payload.infoProduct
            }
        default:
            return state;
    }
};

export default ProductReducer;