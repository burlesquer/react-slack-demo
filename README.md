# React Slack Demo

이 저장소는 **Claude Code** 기능을 테스트하기 위해 만들어진 데모 프로젝트입니다.

## 테스트 대상 문서

| 문서 | 링크 |
|------|------|
| **Slack 통합** | https://code.claude.com/docs/ko/slack |
| **Claude Code on the Web** | https://code.claude.com/docs/ko/claude-code-on-the-web |

## 목적

Slack에서 Claude를 멘션하여 GitHub 저장소의 코드를 분석하고, 이슈를 생성하고, PR을 리뷰하는 등의 작업을 테스트할 수 있습니다.

---

## Claude Code on Slack 테스트 방법

### 1. 기본 설정
1. [Slack 통합 가이드](https://code.claude.com/docs/ko/slack)를 참고하여 Claude Code Slack 앱 설치
2. [Claude Code on the Web](https://code.claude.com/docs/ko/claude-code-on-the-web) 문서를 참고하여 GitHub 저장소 연동
3. 이 저장소를 Claude가 접근할 수 있도록 연결

### 2. 테스트할 수 있는 기능들

#### 코드 분석 요청
```
@Claude 이 저장소의 컴포넌트 구조를 분석해줘
@Claude src/components/Dashboard/Dashboard.js 파일을 리뷰해줘
```

#### 이슈 관련 작업
```
@Claude #1 이슈에 대한 구현 계획을 세워줘
@Claude 새로운 버그 리포트 이슈를 만들어줘
```

#### PR 리뷰
```
@Claude PR #4를 리뷰해줘
@Claude feature/sample-feature 브랜치의 변경사항을 확인해줘
```

#### 코드 수정 요청
```
@Claude DataTable 컴포넌트에 페이지네이션 기능을 추가해줘
@Claude 다크모드 색상을 더 부드럽게 변경해줘
```

---

## 프로젝트 구조

```
src/
├── components/
│   ├── Header/          # 헤더 (테마 토글, 검색, 알림)
│   ├── Sidebar/         # 사이드바 네비게이션
│   ├── Dashboard/       # 대시보드 메인 화면
│   ├── DataTable/       # 정렬/필터링 가능한 데이터 테이블
│   ├── Chart/           # 인터랙티브 바 차트
│   ├── Modal/           # 폼 검증이 포함된 모달
│   └── common/          # Toast, Loading 등 공통 컴포넌트
├── context/
│   └── ThemeContext.js  # 다크/라이트 모드 상태 관리
├── hooks/
│   └── useLocalStorage.js  # 로컬 스토리지 커스텀 훅
├── styles/
│   └── global.css       # 전역 스타일 및 CSS 변수
└── utils/
    └── helpers.js       # 유틸리티 함수들
```

## 주요 기능

| 기능 | 설명 |
|------|------|
| 테마 토글 | 다크/라이트 모드 전환 (localStorage 저장) |
| 대시보드 | 통계 카드, 차트, 최근 활동 표시 |
| 데이터 테이블 | 정렬, 필터링, 행 선택 기능 |
| 차트 | Revenue/Expenses 토글 가능한 바 차트 |
| 모달 | 폼 검증이 포함된 트랜잭션 추가 모달 |
| 토스트 알림 | 성공/에러/경고/정보 알림 |
| 반응형 디자인 | 모바일 친화적 UI |

## 브랜치 전략

- `master` - 프로덕션 브랜치
- `develop` - 개발 브랜치
- `feature/*` - 기능 개발 브랜치

## 샘플 이슈 & PR

테스트용으로 생성된 항목들:

- **Issues**
  - [#1 Add user authentication feature](../../issues/1)
  - [#2 Improve mobile responsiveness](../../issues/2)
  - [#3 Add unit tests for components](../../issues/3)

- **Pull Requests**
  - [#4 Add View All button to Recent Activity section](../../pull/4)

## 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build
```

---

## 관련 문서

- [Slack 통합](https://code.claude.com/docs/ko/slack) - Claude Code Slack 앱 설치 및 설정
- [Claude Code on the Web](https://code.claude.com/docs/ko/claude-code-on-the-web) - 웹 기반 Claude Code 사용법
- [GitHub 통합](https://code.claude.com/docs/ko/github) - GitHub 저장소 연동 방법

---

이 저장소는 Claude Code의 Slack 통합 및 웹 기능을 테스트하고 학습하기 위한 데모 프로젝트입니다.
