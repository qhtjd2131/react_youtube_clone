# React Youtube Clone
## 소개

**현재 진행중인 프로젝트 입니다.**
- Window 환경에서 create-react-app 을 사용하여 Youtube 메인, 검색결과, 동영상 시청 페이지를 클론코딩했습니다.
- Chrome 을 기준으로 개발했기 때문에, 다른 브라우저와 호환이 되지 않을 수 도 있습니다.
- XL(1300px 이상), L(1300px 미만) 사이즈만을 고려하였습니다
- 백엔드를 컨트롤 하지 못하여, apiKey가 노출되어있습니다. 그리고 apiKey의 하루 할당량을 초과 할 시, youtube data를 내려받지 못하여 Loading이 계속 될 수 있습니다. Youtube Api의 하루 할당량은 10,000 이며, 자세한 사항은 아래 링크를 참고해주세요.

   https://developers.google.com/youtube/v3/determine_quota_cost

Youtube : https://www.youtube.com/

My Youtube Clone : https://qhtjd2131.github.io/react_youtube_clone


### 시작하기	
```
npm install
npm run start
```

 ---

### 기술 스택 
**1. HTML5**

**2. CSS3**
 - SCSS 사용 (이번 프로젝트에서 처음 사용)

**3. CRA (create-react-app)**
(auto installed by CRA)
- webpack (bundler)
- babel (trans-compiler)
- others.. 

**4. React Library**
- **sass** : SCSS를 사용을 위한 라이브러리

https://sass-lang.com/documentation/js-api
- **axios** : youtube API 를 사용을 위한 HTTP 통신 라이브러리

https://axios-http.com/kr/docs/intro
- **react-youtube** : Youtube 동영상을 iframe 으로 반환하여 별도의 커스텀 없이 동영상 플레이어 컴포넌트를 사용.

https://www.npmjs.com/package/react-youtube
- **react-icons** : youtube에서 사용되는 아이콘을 대체할 수 있는 아이콘 제공

https://react-icons.github.io/react-icons/ 
https://www.npmjs.com/package/react-icons 
- **react-router-dom v6** : Link, Router, queryString 지원.(페이지 이동 효과를 위해 사용), 이 문서에서는 version 6 를 사용함.

https://reactrouter.com/docs/en/v6/getting-started/overview
https://reactrouter.com/docs/en/v6/upgrading/v5 (v5와 달라진 점)
- **gh-pages** github의 호스팅 서비스 이용하기

https://www.npmjs.com/package/gh-pages
---

### Components Structure
![bbb drawio](https://user-images.githubusercontent.com/34260967/143530854-28281361-5657-4324-8de8-052ba67ddfb5.png)

![temp drawio](https://user-images.githubusercontent.com/34260967/143534852-296c94f5-3b6f-4561-b51d-ba20a0a0f26f.png)
- Header, SideBar 은 fixed 요소임.

---

### Dependencies
```javascript
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.24.0",
    "gh-pages": "^3.2.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "react-youtube": "^7.13.1",
    "sass": "^1.43.4",
    "web-vitals": "^1.0.1"
  }
```
---

### 동작 원리 및 구현 내용

####1. 버튼 부가 설명 컴포넌트
<!-- 버튼 부가설명 컴포넌트 GIF -->
![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/34260967/144215968-27f1f3b7-b38a-4009-8a43-60fa3495a97f.gif)



위와 같은 효과를 내기 위해 아래와 같은 과정을 거침.
1. :after 선택자를 이용하여 컴포넌트를 생성하였다.
**결론 : 문제를 해결 할 수 있는 방법이 아니었음.**

   - hover 이벤트 발생 시 display속성을 none -> box 로 변경 하였다. 하지만 display:none 은 transition 효과가 적용되지 않는다.
   - opacity 속성을 이용하여 투명도 변경하였다. 잘 작동하는 줄 알았지만, 투명해서 보이지 않지만 컴포넌트는 존재하여서 버튼 위치가 아닌 부가설명 컴포넌트 위치에 커서가 hover 되어도 보여지게 되었다.
<br>
2. 컴포넌트 내 state에 따라 className을 추가로 부여.
**결론 : 해결방법으로 채택**

   - 부가 설명 컴포넌트는 항상 존재한다.(사라지는것이 아니고 투명도만 변경)
   - state는 mouseEnter, mouseLeave Event에 따라 결정된다. 따라서 이벤트를 등록하기 위해서는 각각의 버튼의 Ref를 참조해야한다. 그리고 각각의 버튼태그에 핸들러를 등록해주어야 하는 불편함이 있다.


####2. 반응형 #1, SideBar 컴포넌트
1. window size is XL ( size > 1300px )
![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/34260967/144219234-36d5a403-db77-4499-80d1-3b87706f99b6.gif)
2. window size is L ( size <= 1300px )
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/34260967/144218747-820ef507-3fe0-4fc1-83a5-dc47dc3ea283.gif)


위와 같은 반응형 컴포넌트를 구성하기 위해서는 처음에 media-query 사용을 생각하였다. 하지만 이는 반응형으로 단순 스타일 변경이 아니고 state를 변경해야 하기에 적합하지 않은 방법이었다.
따라서, 아래와 같이 구성하였다.
- window resize event 를 등록
- window size가 변경될 때 마다 window size(XL or L)를 판별
- size에 따라 state가 변경.
<br>

####3. 반응형 #2, Overlay 시 스크롤제어
이 프로젝트에서는 오버레이효과를 라이브러리 없이 다음과 같이 구성헸습니다.

window가 L사이즈 이고, 이 때 SideBar가 Open 된다면,
- Overlay Component가 화면을 덮는다.
- SideBar Component가 Overlay 컴포넌트 위에 위치한다.
<br>

Overlay Component Style
```css
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 996;
  transition: 0.3s;
}
```

![ezgif com-gif-maker (12)](https://user-images.githubusercontent.com/34260967/144220398-38421b44-76d2-4490-bf6d-c72d94731acf.gif)

위와 같이 `<Overlay/>`로 어두운 효과를 주었지만 의도와 다르게 스크롤바는 작동하는 문제가 있었다. 이를 다음과 같이 해결하였다.
- 이 스크롤바는 main이 늘어남에 따라 document에서 발생하는 것이기 때문에 `document.body.classList.add("scroll-in-overlay");` 를 사용하여 `<Overlay/>`가 나타날때 className을 부여하였다.
- ```css
   .scroll-in-overlay{
      overflow : hiddne;
   }
   ```

이러하여 문제를 잘 해결했다고 생각했다.

**하지만 `overflow:hidden`속성으로 인해 scrollbar의 영역 자체가 사라져 아래와 같이 메인컨텐츠 크기에 영향을 끼치게 되었다.**

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/34260967/141055549-b5385f4c-9a21-4098-86de-30aa0b4f63fb.gif)

이를 해결하기 위해 다시 다음과 같은 방법을 적용해보았다.
1. overflow : hidden 이 되면서 scrollbar가 사라지면 그 여백만큼 body 에 padding을 주는 방법
   - body의 margin과 padding이 window를 넘겨서 적용되었다.
   - body의 size를 calc(100% - $scrollbar-width) 로 설정하면 margin-right, padding-right가 적용은 되었지만, contents가 padding과 margin위에 overlay되었다.
   - margin과 padding 이 적용되어도 contents의 크기에 영향을 주지 않으므로, 옳지않은 방법이라고 생각했다.
   <br>

2. scrollbar의 스타일을 변경하는 방법
```css
-webkit-scrollbar {
   display:none;
} 
```
```css
-webkit-scrollbar {
   width:0px;
} 
```
  
   - scrollbar가 사라는졌으나 기능은 동작하였다. 따라서 색을바꾸거나 thumb를 조작하는 방법은 옳지 않은거 같다..
   <br>

3. position 속성을 사용하는 방법
```scss
.body {
   position:fixed;
   overflow-y:scroll;
}
```
   - 이 방법은 개발자도구를 통해 youtube main page를 참고하였다.
   - overflow를 발생시키는 대상을 position:fixed로 설정하면 scrollbar가 랜더링되지 않는다.
   - 이때 overflow-y:scroll; 속성이 있다면, scrollbar는 랜더링되지 않고 scroll의 영역은 남아있게 된다.
   - 당연히 youtube main page를 참고하였기때문에 적합한 방법이다.


####반응형 #3, 스크롤바 위치 기억

scrollbar 를 주의해서 봐주세요.
![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/34260967/144235334-de73e7f1-06b3-41f6-8f98-179bb781c2ba.gif)


#####문제발생 흐름과 원인
- `<SideBar>`가 열리고 `<Overlay>`가 나타남.
- 이 때, scroll 기능을 막기 위해 아래와 같은 스타일이 적용 됨.
   ```css
   .body {
      position:fixed;
      overflow-y:scroll;
   }
   ```
- `position:fixed` 속성으로 인해 scroll의 존재가 사라짐.
- `<SideBar>`가 닫히고 `<Overlay>`가 사라짐.
- `position` 속성이 초기화되고, 스크롤의 위치도 초기화되어 새로 생성됨.

위의 문제를 해결하기 위하여, 아래의 hook을 이용하였다.
- `useState` : `isWindowXL, isOpenSideBar`
- `useEffect` 
- `useRef` 

`isWindowXL, isOpenSideBar`가 변경될 때마다 `useEffect`로 현재 스크롤의 위치를 기억하고, `useRef`를 활용하여 리랜더링되어도 기억된 스크롤의 위치가 초기화 되지 않게 하였다.

####부모-자식 간의 hover 문제
![image](https://user-images.githubusercontent.com/34260967/144238324-97ce1d0c-a1a9-4b52-b567-994b120cd6ed.png)

위 사진에서 `<MenuButton>`(9_dots_icon) 과 `<DropDown>` 은 부모 - 자식 관계이다.  

그 이유는 `<DropDown>`이 `position:absolute` 속성을 가지고,  `<MenuButton>`을 기준으로 바로 아래에 위치 해야하기 때문이다.

하지만 부모 - 자식 관계 이기 때문에 아래와 같은 문제가 발생했다.

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/34260967/141275888-700b2468-a222-45bd-a580-e005928fa0ff.gif)


`<DropDown>`위에 커서가 위치하게 되면, 그의 부모인 `<MenuButton>` 의 hover 효과도 동시에 나타나게 된다. 이를 해결하기 위하여 다음과 같은 트릭을 생각하고 해결하였다.
- 부모-자식 관계를 끊는다.
- `<MenuButton>` 왼쪽에 새로운 컴포넌트를 생성하고 보이지 않게 `width:0px`속성을 부여한다.
- 생성된 컴포넌트와 `<DropDown>`이 부모-자식관계를 가진다.
   ```javascript
   <AppMenuWrapper>
      <NewComponent>
         <DropDown /> 
      </NewComponent>

      <MenuButton /> 
      
      ...
   </AppMenuWrapper>
   ```

이렇게 된다면, `<MenuButton>`과 `<DropDown>`의 hover 이벤트는 중복되지 않고, position의 위치 기준은 컴포넌트 왼쪽상단이기 때문에,  `<MenuButton>`의 위치를 기준으로 잡을 수 있게된다.


####테마 설정


####언어 설정


####비디오 시청(WatchVideo) 흐름
비디오 시청 페이지(WatchVideo.js)는 링크 공유할 수 있어야 하고, 그 링크를 주소창에 입력하여 접속 할 때에도, 올바르게 동작해야한다. 따라서 링크(url) 안에 존재하는 쿼리스트링으로 재생할 Youtube동영상 id를 받아서 동영상을 재생해야한다.
ex) `https://www.youtube.com/watch?v=YmQD5P6fvlc`

다음은 사용자가 비디오 시청을 하게되는 흐름과 이와 맞는 처리내용이다.
1. main page를 통한 접속
Main에서 이미 동일한 데이터를 호출 했기 때문에, Link를 통해 state를 WatchVideo 페이지에 넘겨준다. state를 넘겨받은 WatchVideo는 따로 API 호출을 할 필요 없이 랜더링 할 수 있다.
<br>
2. 주소창에 직접 입력을 통한 접속
이경우에는 react-router-dom 의 Link를 사용하지 않았기 때문에 어떠한 state도 존재하지 않는다. 따라서 queryString 으로 받은 Youtube Id를 기반으로 다시 API 호출을 해야한다.
<br>
위의 두 경우를 대비하기 위해 `useEffect()`를 통하여 `<Link>`로 받은 `location.state`의 존재를 확인하여 있으면 `location.state`를 쓰고, 없으면 api 호출을 하여 데이터를 받아오게 하였다. 
이 때, `state`의 key값을 동일하게 하고 초기값으로 빈배열을 할당하여 `state`가 없더라도 초기에 랜더링 오류가 발생하지 않게 하였다. 

```javascript
useEffect(()=>{
   if(location.state){
      // main을 통한 접속 처리
      // ...
   } else {
      // 주소창 입력을 통한 접속 처리
      // ...
   }
},[location.state])
```

---

### 겪었던 어려움

#### 문제 1.
**내용** : sample
**해결** : sample

**기타** :
sample


---

## 향후 계획
1.  sample

2. sample

---
## 이번 프로젝트를 하면서..
- SCSS를 사용하여 특성 파악
- axios를 사용한 api call
- react-router-dom version6 사용하고 변경된 부분 파악
- 테마, 언어설정 기능 구현 (최상위 컴포넌트의 state를 사용)



////


youtube api test하다가 호출 limit에 제한되버림..

headerbar icon 버튼 hover 시 :after 로 부가설명 컴포넌트를 생성함
opacity 속성을 통해 사라지고 보여짐을 구현.
하지만 이때, 원래목적의 컴포넌트가 아닌 부가설명 컴포넌트를 hover 시에도 보여지게됨. (부모 자식 관계이기 때문)

media query 가 아닌 window resize event 를 이용하여 js에서 반응형 웹 구현

window가 xl사이즈(1300px) 미만일 때, sidebar가 open된다면 sidebar가 overlay되어 뒷부분은 어둡게 바뀌고 클릭 및 스크롤을 할 수 없어야 한다.
클리과 어둡게하는 효과는 0.5의 투명도를 가진 overlay 컴포넌트를 화면에 덮어서 해결하였다. 하지만 여전히 스크롤을 할 수 있었다.
그래서 document.body.classList.add() 를 이용하여 body에 조건부로 className을 추가해주고, xl미만사이즈에서 sidebar가 open된다면 overflow:hideen 속성을 사용하여 scroll을 없에주었다.
하지만, scroll을 없애고 나니 그 여백만큼 모든 컴포넌트들의 width가 증가하여 미세하게 변경되었다.
![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/34260967/141055549-b5385f4c-9a21-4098-86de-30aa0b4f63fb.gif)

이를 해결하기위해 다음과 같은 방법을 생각하였다.

1. overflow : hidden 이 되면서 scrollbar가 사라지면 그 여백만큼 body 에 padding을 주는 방법
   => body의 margin과 padding이 window를 넘겨서 적용되었다.
   => body의 size를 calc(100% - $scrollbar-width) 로 설정하면 margin-right, padding-right가 적용은 되었지만, contents가 padding과 margin위에 overlay되었다.
   => margin과 padding 이 적용되어도 contents의 크기에 영향을 주지 않으므로, 옳지않은 방법이라고 생각했다.

2. -webkit-scrollbar {dispaly:none;} {width:0px;} 을 사용하는 방법
   => scrollbar가 사라는졌으나 기능은 동작하였다. 따라서 색을바꾸거나 thumb를 조작하는 방법은 옳지 않은거 같다..

3. body {position:fixed, overflow-y:scroll}를 사용하는 방법
   => 이 방법은 개발자도구를 통해 youtube main page를 참고하였다.
   => overflow를 발생시키는 대상을 position:fixed로 설정하면 scrollbar가 랜더링되지 않는다.
   => 이때 overflow-y:scroll; 속성이 있다면, scrollbar는 랜더링되지 않고 scroll의 영역은 남아있게 된다.
   => 당연히 youtube main page를 참고하였기때문에 적합한 방법이다.

위와 같이 document.body.classList.add or remove 를 통해 className을 추가하였다. 이때 className이 추가되는 조건은 아래와 같다.

```
//isOpenSidebar : 사이드바가 열려있어야한다.
//!isWindowSizeXL : window사이즈가 XL(1300px) 이하여야한다.
if(isOpenSidebar && isWindowSizeXL)
```

그리고 위의 두 state는 아래와 같이 변경된다.

```
const handlerResizeEvent = () => {
      if (window.innerWidth <= 1300) {
        setIsWindowSizeXL(false);
        setIsOpenSideBar(false);
      } else {
        setIsWindowSizeXL(true);
        setIsOpenSideBar(true);
      }
    };

```

하지만 이때 두 state가 아주 정확하게 동시에 바뀌는게 아니라서 body에 className이 원하지 않는 타이밍에 add 되었다. 그렇기 때문에 그 속성인 {position:fixed} 때문에 window width가 1300px를 넘나들때, 스크롤이 비활성화되었고, 강제로 scroll이 가장 상단으로 이동하게되었다.
그래서 이를 가장 간단하게 해결하기 위해서 아래와 같이 state가 바뀌는 타이밍을 다르게 해주었다.

```
const handlerResizeEvent = () => {
      if (window.innerWidth <= 1300) {
        setIsWindowSizeXL(false);
      } else {
        setIsWindowSizeXL(true);
      }

      if (window.innerWidth <= 1330) {
        setIsOpenSideBar(false);
      } else {
        setIsOpenSideBar(true);
      }
    };
```

그리고 다음으로, 3번의 해결방법과 같이 해결하였을 경우 sidebar를 open했을때 body {positon:fixed}가 되고 scroll이 랜더링 되지 않는데, 이 때 내가 이미 한 scroll을 무시하고 body의 가장 상위부분으로 강제로 이동하게된다.
따라서 사용자가 마지막으로 위치한 scroll의 위치를 기억해서 scroll이없어질때 top속성을 이용하여 내려주어야 한다.



현재 이 웹페이지는 Header bar 에 AppMenu 버튼을 클릭하면 MenuModal 컴포넌트가 랜더링 된다. 이때 아래와 같은 구조를 가지는데, AppMenuIcon을 hover하면 description 컴포넌트가 랜더링된다.

```
<AppMenuWrapper>
    <AppMenuIcon> //parent, hover시 description component render
        <MenuModal> //child
        <MenuModal>
    </AppMenuIcon>
</AppMenuWrapper>
```

내가 의도한것은 AppMenuIcon에게서만 MouseEnter event가 발생하면 description 컴포넌트가 나와야한다. 하지만 AppMenuIcon이 MenuModal을 자식으로 가지고 있기 때문에, 아래와 같이 MenuModal 위에 마우스를 올리면, AppMenuIcon(parent) MouseEnter event -> MenuModal(child) MouseEnter event 가 순서대로 발생하여, 의도치 않은 동작을 발생시킨다.


이를 해결하기 위해 아래와 같이 '부모자식관계 -> 형제관계' 로 구조변경을 하였다.

```
<AppMenuWrapper>
    <MenuModalWrapper>  //width : 0px
        <MenuModal>  //position : absoulte
        <MenuModal>
    </MenuModalWrapper>

    <AppMenuIcon> //hover시 description component render

    </AppMenuIcon>
</AppMenuWrapper>
```

그리고 MenuModalWrapper 에 width:0px 속성을 주어서 AppMenuIcon를 기준으로 상대 위치를 지정할 수 있게 트릭을 사용하였다.
이 트릭은 부모의 width가 0px이므로 position 위치를 지정할 때, % 단위는 적용되지 않는다.


//
언어설정을 위한 데이터셋 변경 과정 기록
1, 처음 데이터 구조
data = {
   {
      title : "item1",
      image : <ImageFile1 />,
   },
   {
      title : "item2",
      image : <ImageFile2 />,
   },
   ...
}

2. 두번째 데이터 구조
언어설정이 한국어든 영어든 Image파일은 같으니, title 부분만 국가별로 정해주면 되겠다고 생각했다.

data = {
   item1key : {
      title : {
         KOR : "아이템1",
         EN : "Item1"
      },
      image : <ImageFile1 />
   },
   item2key : {
      title : {
         KOR : "아이템2",
         EN : "Item2"
      },
      image : <ImageFile2 />
   },
}

사용예시
Object.keys(data).map((key, index)=>
   (
      console.log(data[key]["title"][languageState]) 
   )
);

3. 언어데이터와 image나 변수 등을 저장하는 데이터 분리

2번 구조와 3번구조 사이에서 고민했었는데, 나중에 데이터가 많아지고, 언어가 많아지면, 너무 데이터가 커질 수도 있다고 생각했다.
그래서 3번구조를 채택했다. 

language_data = {
   KOR : {
      item1 : "아이템1",
      item2 : "아이템2",
   },
   EN : {
      item1 : "item1",  
      item2 : "item2",
}
data_data = {
   item1 : {
      image : <ImageFile1 />
   },
   item2 : {
      image : <ImageFile2 />
   }
}

나의 itemState 는 초기에 setItemState("아이템1") 과 같이 key값(setItemState("item1key")이 아닌 보여지는 값으로 세팅되어있었다.
그래서 전체적인 구조변경에 어려움을 느꼈고, state안의 값을 직접 랜더링 하는것 보다, key값으로 설정하고
미리 선언된 데이터셋을 이용하여 data[itemState] 으로 접근하는것이 효율적인 데이터 관리를 할 수 있다고 느꼈다.

//

테마설정으로 인해 styled components의 필요성을 느낌
//
dropdown 컴포넌트가 조건부 랜더링됨으로 인하여 unmount -> mount 되었을때, state가 초기화 되는 현상.
state를 부모에게 주어서 문제 해결
그리고 다음과 같은 방법을 생각함.
1. localstorage 사용
2. mount -> unmount가 아닌 display -> display:none 으로 스타일만 변경하는 방식.


scroll이 제일 하단(bottom)에 위치할때 다음과 같은 조건을 이행하며 video item 을 추가해야한다.
1. 독립적인 컴포넌트로 추가된다.(기존에 아이템 객체에 추가되는것이 아님.)
2. state에 따른 조건부 랜더링이 아니다. 즉, scroll이 하단에 위치하게 된다면 추가된 아이템을 랜더링 한다. 하지만 scroll을 올린다고해서 컴포넌트는 사라지면 안된다.
3. 반복적으로 다른 아이템을 추가할 수 있어야한다. 


api key 노출 문제.
1. .env 파일로 환경변수 설정 => 빌드파일에 포함되므로 누구든지 api key를 볼 수 있음.
2. backend 단에서 apiKey 를 저장하고 사용하는게 올바른 apiKey 사용 방법임.

youtube api 호출 할당량 관리
1. 큰 데이터셋을 가져와 필요한것만 사용하는 현재의 프로젝트
2. 이는  불필요한 데이터를 검색하고 가져오므로, 사용가능한 할당량을 감소시키고, 더 많은 시간과 대역폭이 필요함.
3. 결론적으로 본 프로젝트 테스트 중 할당량 제한으로 테스트를 못하게 되는 상황 발생
3. 따라서 할당량 관리가 필요함.

  3-1. 할당량 계산 (https://developers.google.com/youtube/v3/determine_quota_cost) 참고
  main
-search : 100  (20개)
-channel : 1  (20개)

cost : 2

searchResult
-search : 100 (7)
-channel:1 (7)

cost 101

watchVideo(from main)
-search : 100

cost : 100

watchVideo(from search or link)
-search : 100 (20)
-video : 1 
-channel : 1

cost 102



main->search->watchVideo
expected cost : 203,  
real cost:  206 (2 -> 208)

main->watchVideo
expected cost : 102, 
real cost : 104 (208->312)

watchVideo->main
expoected cost : 2
real cost : 4 (312->316)

main -> main 
expected cost : 2
real cost : 2 (316->318)

main->watchVideo
expected cost : 100
real cost : 100 (318->418)

watchVideo->main (second try)
expected cost : 2
real cost : 4 (418->422)

main 
expected cost : 2
real cost : 2 (424->426)

=> 그냥 main으로 이동할때는 2, 다른페이지에서 main으로 이동할때에는 4가 듬 이유는?

  3-2. fields 매개변수로 필요한 데이터만 중첩없이 설정. (https://developers.google.com/youtube/v3/getting-started#fields))
  test 결과 : 공식문서에서는 fields 매개변수로 필요한 데이터만 가져오는것이 할당량을 줄이는 방법이라고 기재되어있다. 하지만 이 프로젝트의 메인페이지를 기준으로 fields 설정 전 cost:1, fields 설정 후 cost:1, 로 할당량의 차이는 없었다. 1이 최솟값이라서 그런가 하여 추가적으로 할당량이 100을 차지하는 'search' api call 에서도 변화는 없었다.
