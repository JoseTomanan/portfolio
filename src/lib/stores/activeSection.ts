import { writable } from 'svelte/store';
export const activeSection = writable<string | null>('me');
