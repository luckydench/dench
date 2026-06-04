/**
 * dench 의 토큰 인증 방식 
 *
 * - BASIC : 기본 인증 방식, base64로 인코딩된 사용자 이름과 비밀번호를 사용한 인증
 * - BEARER : 토큰 기반 인증 방식, 일반적으로 OAuth 2.0에서 사용되는 방식으로, 액세스 토큰을 사용하여 인증
 * - DIGEST : 다이제스트 인증 방식, 클라이언트와 서버 간에 해시된 정보를 교환하여 인증하는 방식
 * - API_KEY : API 키 인증 방식, 고유한 키를 사용하여 인증하는 방식, 일반적으로 API 액세스에 사용
 * - HMAC : HMAC 인증 방식, 메시지 인증 코드(HMAC)를 사용하여 요청의 무결성과 인증을 검증하는 방식
 * - AWS4_HMAC_SHA256 : AWS에서 사용하는 HMAC-SHA256 기반 인증 방식
 * - TOKEN : 일반적인 토큰 인증 방식, 특정 형식의 토큰을 사용하여 인증하는 방식
 * - ETC : 기타 인증 방식, 위에 명시된 방식 외의 다른 인증 방식을 나타내는 값 
 * 
 * 기본적으로 Bearer 토큰 방식이 사용되며, auth 함수의 type 매개변수를 통해 다른 인증 방식을 선택할 수 있습니다.
 * 
 */
export enum DenchAuthType{
    ETC= 'ETC',
    BASIC = 'Basic',
    BEARER = 'Bearer',
    DIGEST = 'Digest',
    NEGOTIATE = 'Negotiate',
    AWS4_HMAC_SHA256 = 'AWS4-HMAC-SHA256',
    API_KEY = 'ApiKey',
    TOKEN = 'Token',
    HMAC = 'HMAC',
}