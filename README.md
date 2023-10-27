# Photodairy
![스크린샷 2023-10-13 오후 6 24 1](https://github.com/xjanedev/next-social-app/assets/127685269/46f64ded-078c-4be4-bd49-f46e262adbcd)


## Description
- 구글 소셜 로그인이 제공되는 포토 다이어리 형식의 프로젝트
  - 이미지와 함께 게시글 작성이 가능하며 댓글, 좋아요, 북마크, 팔로잉/팔로우 로 회원간 소통이 가능한 웹 서비스

<br>


## Deployed Link

<a href="https://photodairy.vercel.app/">Photodairy Link</a>

<br>

## Project Log Link

<a href="">Link</a>

<br>

## Implementation List

1. 구글 OAuth 의 소셜 로그인 기능 구현
    - 구글 소셜 로그인으로 간편하게 회원가입이 가능하다.
    - 로그인 된 계정은 게시판에 글을 작성할 수 있으며, 웹 서비스전체 기능을 사용할 수 있다.
    - 로그인 하기 전에는 서비스를 사용할 수 없으며, Sign out 을 하고 다른 페이지로 이동하면 초기 로그인 화면으로 되돌아간다.
2. 사용자간 팔로잉 / 팔로우 기능 구현
    - 회원간의 유저 페이지에서 팔로잉, 언팔로잉 가능
    - 팔로잉한 유저에 한에서 홈에서 게시물 조회 가능
3. 게시글 작성 기능 구현
    - 로그인된 계정은 자신의 유저 프로필로 게시글을 작성할 수 있음
    - 이미지 파일을 업로드 할 수 있고, drag & drop으로도 업로드 할 수 있음
    - 게시글 작성후 바로 홈 게시물 피드로 리다이렉트 됨
4. 댓글 작성 기능 구현
    - 홈 피드와 게시글 상세 페이지에서 게시글에 대한 댓글을 작성할 수 있음
    - 게시글 상세 모달 페이지에서 댓글을 작성하고 창을 닫으면 업데이트 사항 바로 반영
5. 자신이 작성한 게시글 조회 기능 구현
    - 로그인한 사용자는 자신이 작성한 게시글을 유저 페이지에서 조회 가능
6. 사용자 검색 기능 구현
    - 가입된 계정을 검색 창에서 모두 조회 가능
    - 사용자의 편의성을 위해 키워드로 검색 가능
    - 디바운스로 최적화 시킴
7. 좋아요, 북마크 기능 구현
    - 로그인된 계정의 좋아요, 북마크한 게시물을 자신의 유저페이지에서 확인 가능
    - 게시글 모달 상세페이지에서 좋아요 토글하면 창 밖의 게시글 피드와 동기화
    - ui optimistic update로 최적화 시킴

<br>

## To Do List
- [ ] 자신이 작성한 게시글 상세 페이지에서 삭제 및 수정 버튼 표시
- [ ] 무한 스크롤 기능 구현
- [ ] 회원 탈퇴 기능 구현

<br>

## File Structure

// next-social-app

📦src
┣ 📂app
┃ ┣ 📂api
┃ ┣ 📂auth
┃ ┣ 📂newpost
┃ ┣ 📂search
┃ ┣ 📂user
┃ ┣ layout.tsx
┃ ┣ page.tsx
┣ 📂components
┣ 📂context
┣ 📂hooks
┣ 📂models
┣ 📂service
┣ 📂type
┗ 📂util

→ 기능상으로 연관이 있는 파일들끼리 폴더 별로 정리하였고, 폴더 구조만으로도 파일 내 코드가 어떤 역할을 하는지 알 수 있도록 하였다. 또한 파일명도 명시적으로 표현해보려고 하였다.


<br>

## Preview

Upload
https://github.com/xjanedev/next-social-app/assets/127685269/0d3fc5ed-7ee7-4fc4-a565-bfd12eb822ff

Google OAuth





