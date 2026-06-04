import type { DenchCreateBuilder, DenchGetBuilder } from "./denchBuilder";

/**
 *  HTTP 요청 빌더 인터페이스
 * 
 *  @interface DenchInterface
 *  @function get - GET 요청을 위한 빌더 반환
 *  @function post - POST 요청을 위한 빌더 반환
 *  @function put - PUT 요청을 위한 빌더 반환
 *  @function delete - DELETE 요청을 위한 빌더 반환
 */
export interface DenchInterface{
    baseURL : string,
    get : <T>(api:string) => DenchGetBuilder<T>
    post : <T>(api: string, data : any) => DenchCreateBuilder<T>
    put : <T>(api: string, data : any) => DenchCreateBuilder<T>
    delete : <T>(api: string) => DenchGetBuilder<T>
}



/**
 * Dench 요청 실행 인터페이스
 * 
 * @interface DenchRunner
 */
export interface DenchRunner<T> {

    /**
     * fetch 요청을 실행하고 Response 객체를 반환합니다.
     * 
     * @returns Promise<Response>
     */
    toResponse: () => Promise<Response>,

    /**
     * fetch 요청을 실행하고 응답을 JSON으로 파싱하여 반환합니다.
     * 
     * @returns Promise<T>
     */
    toJson: () => Promise<T>,

    /**
     * fetch 요청을 실행하고 응답을 FormData로 파싱하여 반환합니다.
     * 
     * @returns Promise<FormData>
     */
    toFormData: () => Promise<FormData>
}