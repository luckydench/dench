

/*
    url 기본 정규화 규칙
    soft : baseURL의 끝엔 슬래쉬가 없어야 하며, apiURL의 시작엔 최소 한개의 슬래쉬가 있어야 한다.
*/
export function boundaryNormalize(base : string, api : string) : { baseURL : string, apiURL : string}{


    base = base.replace(/\/+$/, "");
    api = "/" + api.replace(/^\/+/, "");


    return {
        baseURL: base,
        apiURL: api
    }
}


/**
 * 1.  baseURL 끝의 슬래쉬를 제거하고 apiURL의 시작엔 최소 한개의 슬래쉬를 생성한다.
 * 2.  baseURL과 apiURL에 슬래쉬가 중복 발생하는 모든 경우에 하나로 바꾼다.
 * 3.  apiURL의 끝 부분 슬래쉬를 제거한다.
 * 4.  http: 또는 https: 에는 슬래쉬가 정확히 두 개 오게 한다. 
 * 
 * @param base 
 * @param api 
 * @returns 
 */
export function hardNormalize(base: string, api : string) : { baseURL : string, apiURL : string}{

    let { baseURL, apiURL } = boundaryNormalize(base, api);

    baseURL = baseURL.replace(/(?<!:)\/{2,}/g, "/");
    apiURL = apiURL.replace(/\/{2,}/g, "/");

    if(apiURL.endsWith("/")) {
        apiURL = apiURL.replace(/\/+$/, "");
    }

    return {
        baseURL: baseURL,
        apiURL: apiURL
    }
}



/*
    정규식 요약

    - 정규식의 시작과 끝은 / / 로 표현합니다
    - 문자열 "/"를 필터링 대상에 넣고자 하면 \/로 표현해야 합니다.

    ^ 는 그 문자열로 시작이라는 의미입니다 
    즉 ^\/는 문자열이 "/"로 시작하는 경우를 의미합니다

    $는 그 문자열로 끝이라는 의미입니다
    즉 \/+$는 문자열이 "/"로 끝나는 경우를 의미합니다

*/