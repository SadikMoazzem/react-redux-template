import store from "./modules/store/store";

export default {
    onUpdate: registration => {
        const waitingServiceWorker = registration.waiting;
        
        if (waitingServiceWorker) {
            waitingServiceWorker.addEventListener("statechange", event => {
                if (event.target.state === "activated") {
                    store.dispatch({
                        type: 'NEW_APP_VERSION'
                    })
                }
            });
            waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        }
    },
   onSuccess: registration => {
     console.info('service worker in success state')
    },
}