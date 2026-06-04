import type { HTTPCache, HTTPCredentials, HTTPMode, HTTPRedirect, HTTPReferrerPolicy } from "./denchEnum"

interface DenchOptions extends RequestInit{
    method: string,
    credentials?: HTTPCredentials,
    signal?: AbortSignal,
    headers?: Record<string, string>,
    body?: BodyInit,
    cache?: HTTPCache
    mode?: HTTPMode
    redirect?: HTTPRedirect
    referrerPolicy?: HTTPReferrerPolicy
}


export interface DenchBaseConfig{
    baseURL : string,
    api : string,
    errorcallback? : (error : unknown) => void,
    options : DenchOptions
}

export interface DenchConfig extends DenchBaseConfig{
    abortController?: AbortController,   
    timeout? : number;
}