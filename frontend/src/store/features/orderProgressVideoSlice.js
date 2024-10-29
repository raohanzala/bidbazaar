import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        videos : [],
        orderConfirmed : null,
        rejectionCount : 0,
        notification : ''
}


const orderProgressSlice = createSlice({
    name : 'orderProgressVideo',
    initialState,

    reducers : {
        addVideo : (state, action)=> {
            const file = action.payload.target.files[0];
            console.log(file)
            if(file){
                const newVideo = {
                    url: URL.createObjectURL(file),
                    status: "pending",
                };
                state.videos.push(newVideo)
                state.notification = "Video uploaded! Waiting for buyer's response."
            }
        },
        confirmOrder: (state) => {
            state.orderConfirmed = true;
            state.notification = "Order confirmed! Notification sent to seller.";
          },
          rejectOrder : (state)=> {
            if(state.rejectionCount < 3) {
                state.rejectionCount +=1
                state.notification = "Order rejected. Seller notified to upload a new video."
                const lastVideo = state.videos[state.videos.length -1]
                if(lastVideo){
                    lastVideo.status = 'rejected'
                }
            }else{
                state.notification = "Order rejected three times. Order automatically canceled.";
            }
          },
          resetNotification: (state) => {
            state.notification = "";
          },

    }
})

export const { addVideo, confirmOrder, rejectOrder, resetNotification } = orderProgressSlice.actions;
export default orderProgressSlice.reducer;
