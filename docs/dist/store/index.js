import{writable as t,get as o}from"../../_snowpack/pkg/svelte/store.js";export const todos=t([]);export function saveStorage(){localStorage.setItem("todos",JSON.stringify(o(todos)))}
