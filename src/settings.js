import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react";
const appId = "b885eb3725424545880d14c01ff0208e";

const token = "006b885eb3725424545880d14c01ff0208eIADy8EpvDKC+QHy0/jGaQBhmFEMZ5WpMw44VztY+qAYc0VpiGh8AAAAAEAA4smrcxM6BYgEAAQDEzoFi";

export const config = {mode: "rtc", codec:"vp8", appId: appId, token: token};

export const useClient = createClient(config); 
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks(); 

export const channelName = "Main";