# [Pre-onboarding Assignment 1] 하얀마인드 #1, #2

## 과제 구현 목록

- [x] 마크업, css 스타일링
- [x] Data Fetch API 호출 함수 작성
- [x] Intesection Observer를 활용한 Custom Hook 작성
- [x] Infinite Scroll 기능 구현
- [x] 각 기능별 폴더 및 파일 분리

## 설치 및 시작방법

```
git clone https://github.com/SeongsangCHO/wanted-preonboarding-subject-1.git
cd wanted-preonboarding-subject-1
npm i
npm start
```

## 프로젝트 구조 설명


![프로젝트 폴더 구조](https://user-images.githubusercontent.com/55486644/127165883-eb76827f-1534-4ec1-8a88-8be22c1f5efa.png)


📂 src > api > `getCommentData.js` : Data Fetch API 호출 함수

📂 src > components > `InfiniteScroll.js` : Infinite Scroll 기능

📂 src > hooks > `useIntersectObserver.js` : Intesection Observer를 활용한 Custom Hook

📂 src > constants > `index.js` : 상수 저장 파일

📂 src > `App.js` : Infinite Scroll 컨테이너

📂 src > `App.css` : 전체 스타일 css 파일

📂 src > `index.css` : global reset css 파일


## 배포 주소 및 기능 영상

🔗 배포 주소: https://seongsangcho.github.io/wanted-preonboarding-subject-1

![시연영상](https://user-images.githubusercontent.com/55486644/127104606-a392008e-9c30-4f04-b523-d04a8cf54c8e.gif)

## 과제 후기

- 👨🏻‍💻 [조성상](https://github.com/SeongsangCHO) : [Infinite Scroll 구현 (feat. pair Programming)](https://watermelonlike.tistory.com/157)

- 👩🏻‍💻 [강보현](https://github.com/bohyunkang) : [[프리온보딩코스 과제 회고 #1] 무한 스크롤(Infinite Scroll)](https://bohyunkang.tistory.com/8)
