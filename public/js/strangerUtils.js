import * as wss from "./wss.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as ui from "./ui.js";
let strangerCallType;

export const changeStrangerConnectionStatus = (status) => {
  const data = { status };
  wss.changeStrangerConnectionStatus(data);
};

export const getStarangerSocketIdAndConnect = (callType) => {
  strangerCallType = callType;
  wss.getStarangerSocketId();
};

export const connectWithStranger = (data) => {
  if (data.randomStrangerSocketId) {
    webRTCHandler.sendPreOffer(strangerCallType, data.randomStrangerSocketId);
  } else {
    // no user is available for connection
    ui.showNoStrangerAvailableDialog();
  }
};
