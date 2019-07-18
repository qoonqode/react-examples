import { observable, action } from 'mobx';
import { useStaticRendering } from 'mobx-react';

// Is this on the server?
const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

class Store {

    // Observables
    @observable currentPage = 0;
    @observable counter = 0;

    constructor(isServer, initialData = {}) {
        this.currentPage = initialData.currentPage != null ? initialData.currentPage : 0;
        this.counter = initialData.counter != null ? initialData.counter : 0;
    }

    @action setCurrentPage(page) {
        this.currentPage = page;
    }

    @action counterInc() {
        this.counter = this.counter + 1;
    }

    @action counterDec() {
        this.counter = this.counter - 1;
    }
}

let store = null;

export function initStore(initialData) {
    if (isServer) {
        return new Store(isServer, initialData);
    }
    if (store === null) {
        store = new Store(isServer, initialData);
    }
    return store;
}
