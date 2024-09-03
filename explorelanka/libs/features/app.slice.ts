import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    logo_url: "",
    banner_imgs: [],
    site_main_menu: [],
    service_items: [],
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setApp: (state, action: PayloadAction<any>) => {
            return {...action.payload};
        },
    }
});

export const { setApp } = appSlice.actions;
export default appSlice.reducer;
