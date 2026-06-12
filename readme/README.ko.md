<div align="center">
  <img src="./img/Dench.png" alt="Dench 로고" width="260" />

  <h1>Dench</h1>

  <p>
    네이티브 Fetch API를 기반으로 만든 가볍고 타입 안전한 HTTP 요청 빌더
  </p>

  <p>
    <a href="https://denchdocs.vercel.app/docs/intro"><strong>문서</strong></a>
    ·
    <a href="https://www.npmjs.com/package/dench-fetch">npm</a>
    ·
    <a href="../README.md">English</a>
    ·
    <a href="./update">업데이트 노트</a>
  </p>

  <p>
    <a href="https://www.npmjs.com/package/dench-fetch">
      <img src="https://img.shields.io/npm/v/dench-fetch?label=npm" alt="npm 버전" />
    </a>
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Fetch_API-Native-2E7D32" alt="Fetch API" />
    <img src="https://img.shields.io/badge/tsup-8.5-F7DF1E" alt="tsup" />
    <img src="https://img.shields.io/badge/Vitest-4.1-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
  </p>
</div>

## Dench는 어떤 라이브러리인가요?

Dench는 네이티브 `fetch` API를 작고 간결한 체이닝 요청 빌더로 감싼 TypeScript HTTP 클라이언트 라이브러리입니다.

`fetch`의 동작과 유연성은 유지하면서 요청 설정을 구조적으로 작성하고, 공통 설정을 재사용하며, 타입이 지정된 응답을 받을 수 있게 해줍니다.

```ts
const user = await dench("https://api.example.com")
  .get<User>("/users/1")
  .auth("access-token")
  .timeout(3000)
  .toJson();
```

## 만든 목적

Dench는 `fetch`로 HTTP 요청을 작성할 때의 개발 경험을 개선하기 위해 만들었습니다.

- 반복되는 `RequestInit` 객체와 문자열 설정을 줄입니다.
- TypeScript 타입을 통해 올바른 요청 작성을 돕습니다.
- URL과 옵션 값을 작성하면서 발생하는 실수를 줄입니다.
- 인증, timeout, abort, error 처리 같은 공통 패턴을 메서드 체이닝으로 설정합니다.
- Fetch API의 기본 동작을 감추지 않으면서 API 클라이언트와 빌더 설정을 재사용합니다.

## 설치 방법

최신 안정 버전을 설치합니다.

```bash
npm install dench-fetch
```

최신 베타 버전을 설치합니다.

```bash
npm install dench-fetch@beta
```

## 기본 사용법

base URL을 기준으로 재사용 가능한 클라이언트를 생성합니다.

```ts
import { dench } from "dench-fetch";

const api = dench("https://api.example.com");
```

타입이 지정된 GET 요청을 전송합니다.

```ts
type User = {
  id: number;
  name: string;
};

const user = await api
  .get<User>("/users/1")
  .toJson();
```

POST 요청으로 JSON 데이터를 전송합니다.

```ts
type Post = {
  id: number;
  title: string;
};

const created = await api
  .post<Post>("/posts")
  .sendJson({
    title: "Hello, Dench",
  })
  .toJson();
```

메서드 체이닝으로 공통 요청 옵션을 추가합니다.

```ts
const result = await api
  .get<Result>("/secure")
  .auth("access-token")
  .timeout(5000)
  .toJson();
```

전체 API 사용법과 고급 예제는 [Dench 공식 문서](https://denchdocs.vercel.app/docs/intro)에서 확인할 수 있습니다.
