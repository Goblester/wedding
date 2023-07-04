import {writable} from "svelte/store";

type ModalStateType = 'contacts' | null;


export const modal = writable<ModalStateType>(null);