// Mock service. Ganti isi fungsi ini dengan fetch/WebSocket ke backend saat tersedia (lihat README).
import {DEFAULT_SETTINGS} from '../config/defaults';import {buildHistory,makeSample} from '../data/simulation';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const store={samples:buildHistory(),relays:{1:{on:true,at:Date.now()},2:{on:false,at:Date.now()}},online:true,lastSeen:Date.now()};
export const mockControls={setOnline:v=>{store.online=v;if(v)store.lastSeen=Date.now()}};
export async function getMonitoring(){await wait(60);if(!store.online)throw new Error('ESP32 offline');const s=makeSample(Date.now(),store.samples.at(-1),store.relays,Math.random);store.samples.push(s);if(store.samples.length>6000)store.samples.shift();store.lastSeen=s.ts;return s}
export async function getHistory(){return[...store.samples]}
export async function getConnection(){return{online:store.online,lastSeen:store.lastSeen,relays:JSON.parse(JSON.stringify(store.relays))}}
export async function sendRelayCommand(ch,on){await wait(800);if(!store.online)throw new Error('Perangkat offline, perintah tidak terkirim');if(Math.random()<0.08)throw new Error('Tidak ada konfirmasi dari perangkat (timeout)');store.relays[ch]={on,at:Date.now()};return{ch,on,confirmedAt:Date.now()}}
export async function getSettings(){try{return{...DEFAULT_SETTINGS,...JSON.parse(localStorage.getItem('cnc-settings')||'{}')}}catch{return{...DEFAULT_SETTINGS}}}
export async function saveSettings(s){await wait(300);localStorage.setItem('cnc-settings',JSON.stringify(s));return s}
