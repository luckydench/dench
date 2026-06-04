import type { DenchCreateBuilder, DenchGetBuilder } from "./denchBuilder";


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