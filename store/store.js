import {action, makeObservable} from "mobx";
import {enableStaticRendering} from "mobx-react";
import {useMemo} from "react";


// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === "undefined");

let store = null;

const isServer = typeof window === "undefined";

class Store {
    constructor(props) {
        makeObservable(this);
        this.hydrate(props);
    }

    @action
    hydrate = data => {
        if (data) {
            // this.userStore = new UserStore(data);
        }
    };
}

function initializeStore(initialData) {
    // if _store is null or undifined return new Store
    //otherwise use _store

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    const initialStore = {}

    // For SSG and SSR always create a new store
    // if (isServer) {
    //     return {
    //         cartStore: new CartStore(),
    //         userStore: new UserStore(initialData),
    //     };
    // }
    //
    // // Create the store once in the client
    // if (store === null) {
    //     store = {
    //         cartStore: new CartStore(),
    //         userStore: new UserStore(initialData),
    //     };
    // }

    return store;
}

export function useStore(initialState) {
    return useMemo(() => initializeStore(initialState), [initialState]);
}