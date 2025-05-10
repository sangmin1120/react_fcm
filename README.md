# React FCM Device Token Fetcher

이 프로젝트는 React를 이용하여 Firebase Cloud Messaging(FCM)의 디바이스 토큰을 가져오는 간단한 예제입니다.

## 기능

- 사용자가 웹페이지에 접속하면 알림 권한을 요청합니다.
- 사용자가 알림 권한을 허용하면, 브라우저 콘솔에 FCM 디바이스 토큰이 출력됩니다.

## 사용 기술

- React
- Firebase (Cloud Messaging)

## 시작하기

### 사전 준비

- Firebase 프로젝트 생성 및 FCM 설정
- Firebase 웹 앱 등록 및 `firebase-messaging-sw.js` 파일 준비

### 환경 변수 설정 (firebase setting)
- REACT_APPRIFEBASE_VAPID_KEY
- REACT_APPFIREBASE_API_KEY
- REACT_APPFIREBASE_DOMAIN
- REACT_APPFIREBASE_PROJECTID
- REACT_APPFIREBASE_STORAGE
- REACT_APPFIREBASE_SENDERID
- REACT_APPFIREBASE_APP_ID
- .env 파일을 만들어서 추가하면 됨

### 설치

```bash
git clone https://github.com/your-username/react-fcm-token-fetcher.git
cd react-fcm-token-fetcher
npm install
