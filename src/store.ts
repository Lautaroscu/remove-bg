import { writable } from "svelte/store";
import { typeStatus } from "../types";
export const imageStatus = writable(typeStatus.READY) 
export const originalImage = writable(null)  
export const modifiedImage = writable(null)
