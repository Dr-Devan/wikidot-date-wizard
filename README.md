> **AI 사용 고지 / AI disclosure:** 이 프로젝트의 코드와 문서는 AI의 도움을 받아 작성·수정했습니다. The code and documentation in this project were written and revised with AI assistance.

# Wikidot Date Wizard

날짜와 시간을 선택해 Wikidot의 `[[date]]` 코드를 생성하는 브라우저 도구입니다. 미리보기에는 Wikidot의 `OZONE.utils.formatOdate()`를 사용합니다.

## 사용법

`index.html`을 웹 서버에서 열고 날짜·시간과 format 문자열을 입력한 뒤 코드를 복사합니다. 생성된 코드를 Wikidot 페이지에 붙여 넣으면 됩니다. 날짜와 시간은 **도구를 실행하는 브라우저의 현지 시간대**를 기준으로 Unix timestamp로 변환합니다.

- format을 비우면 `[[date 1234567890]]`처럼 format 속성 없이 생성합니다.
- 한국어·영어·일본어·중국어(간체)·덴마크어·독일어·스페인어·프랑스어·이탈리아어·폴란드어·러시아어·세르비아어 UI를 지원합니다. 처음에는 브라우저 언어를 따르고, 오른쪽 위에서 언어를 변경하면 선택이 저장됩니다.
- 상대시간과 hover 문구의 단위는 Wikidot의 번역 기능으로 표시합니다. 그 외 날짜 포맷과 단·복수 처리 방식은 Wikidot 렌더러를 따릅니다.
- format 값은 Wikidot 렌더러에 그대로 전달합니다. [Wikidot 날짜 문법](https://community.wikidot.com/howto:date-how-long-ago)의 예: `%e %b %Y, %H:%M %Z|agohover`, `%O`.
- format 속성의 큰따옴표는 Wikidot 코드 구문을 깨뜨리므로 입력할 수 없습니다.
- Wikidot의 날짜 렌더러는 1970년 이전 날짜를 표시하지 않습니다. 해당 날짜의 코드는 생성되지만 미리보기는 비어 있고 경고가 나타납니다.
- 미리보기는 Wikidot의 외부 JavaScript와 CSS를 불러옵니다. 네트워크나 Wikidot 서버 문제로 스크립트를 불러올 수 없으면 미리보기를 사용할 수 없습니다.

빌드 과정이나 패키지 설치는 필요하지 않습니다. GitHub Pages에서 배포하려면 저장소 설정의 Pages에서 `main` 브랜치의 루트(`/`)를 게시 대상으로 선택하면 됩니다.

## 출처 및 라이선스

ErichSteinboeck이 2008년에 공개한 [Wikidot Community Date Wizard](https://community.wikidot.com/howto:date-how-long-ago)를 바탕으로 만든 수정판입니다. 원본 페이지는 [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)로 제공됩니다. 원본과 비교해 선택 가능한 연도를 1900~2100년으로 확장하고, NOW 버튼·코드 복사 버튼·다크 모드·입력 검증을 추가했습니다. 날짜나 format을 바꾸면 미리보기를 다시 렌더링하도록 수정했습니다.

이 수정판의 코드는 [CC BY-SA 4.0 International](LICENSE)로 배포합니다. Wikidot에서 외부로 불러오는 JavaScript와 CSS는 이 저장소에 포함되지 않으며 각각의 원래 조건이 적용됩니다.
