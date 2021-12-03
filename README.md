# React Youtube Clone
## 소개

*~~현재 진행중인 프로젝트 입니다.~~*


```
**2020/12/02, 프로젝트 제작 완료**
   - main page에서는 한국 인기동영상 리스트를 보여줍니다.
   - 왼쪽 사이드바는 동작하지 않습니다.
   - 비디오 검색, 언어설정, 테마설정 기능이 구현되어있습니다.
   - 모든 비디오는 클릭하여 시청하실 수 있습니다.
```

- Window 환경에서 create-react-app 을 사용하여 Youtube 메인, 검색결과, 동영상 시청 페이지를 클론코딩했습니다.
- Chrome 을 기준으로 개발했기 때문에, 다른 브라우저와 호환이 되지 않을 수 도 있습니다.
- XL(1300px 이상), L(1300px 미만) 사이즈만을 고려하였습니다
- 백엔드를 컨트롤 하지 못하여, apiKey가 노출되어있습니다. 그리고 apiKey의 하루 할당량을 초과 할 시, youtube data를 내려받지 못하여 Loading이 계속 될 수 있습니다. Youtube Api의 하루 할당량은 10,000 이며, 자세한 사항은 아래 링크를 참고해주세요.

   https://developers.google.com/youtube/v3/determine_quota_cost


<br>

Youtube : https://www.youtube.com/ <br>
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
   <br>
- **axios** : youtube API 를 사용을 위한 HTTP 통신 라이브러리
   https://axios-http.com/kr/docs/intro
   <br>
- **react-youtube** : Youtube 동영상을 iframe 으로 반환하여 별도의 커스텀 없이 동영상 플레이어 컴포넌트를 사용.
   https://www.npmjs.com/package/react-youtube
   <br>
- **react-icons** : youtube에서 사용되는 아이콘을 대체할 수 있는 아이콘 제공
   https://react-icons.github.io/react-icons/ 
   https://www.npmjs.com/package/react-icons 
   <br>
- **react-router-dom v6** : Link, Router, queryString 지원.(페이지 이동 효과를 위해 사용), 이 문서에서는 version 6 를 사용함.
   https://reactrouter.com/docs/en/v6/getting-started/overview
   https://reactrouter.com/docs/en/v6/upgrading/v5 (v5와 달라진 점)
   <br>
- **gh-pages** github의 호스팅 서비스 이용하기
   https://www.npmjs.com/package/gh-pages
   <br>

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

## 동작 원리 및 구현 내용

### 1. 버튼 부가 설명 컴포넌트
<!-- 버튼 부가설명 컴포넌트 GIF -->
![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/34260967/144215968-27f1f3b7-b38a-4009-8a43-60fa3495a97f.gif)



위와 같은 효과를 내기 위해 아래와 같은 과정을 거침.
1. `:after` 선택자를 이용하여 컴포넌트를 생성하였다.
**결론 : 문제를 해결 할 수 있는 방법이 아니었음.**
- hover 이벤트 발생 시 `display`속성을 `none -> box` 로 변경 하였다. 하지만 `display:none` 은 `transition` 효과가 적용되지 않는다.
<br>

- `opacity` 속성을 이용하여 투명도 변경하였다. 잘 작동하는 줄 알았지만, 투명해서 보이지 않지만 컴포넌트는 존재하여서 버튼 위치가 아닌 부가설명 컴포넌트 위치에 커서가 hover 되어도 보여지게 되었다.
<br>

2. 컴포넌트 내 `state`에 따라 className을 추가로 부여.
**결론 : 해결방법으로 채택**
- 부가 설명 컴포넌트는 항상 존재한다.(사라지는것이 아니고 투명도만 변경)

- `state`는 `mouseEnter, mouseLeave` Event에 따라 결정된다. 따라서 이벤트를 등록하기 위해서는 각각의 버튼의 `Ref`를 참조해야한다. 그리고 각각의 버튼태그에 핸들러를 등록해주어야 하는 불편함이 있다.
<br>
<br><br>

### 2. 반응형 #1, SideBar 컴포넌트
1. window size is XL ( size > 1300px )
![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/34260967/144219234-36d5a403-db77-4499-80d1-3b87706f99b6.gif)
<br>

2. window size is L ( size <= 1300px )
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/34260967/144218747-820ef507-3fe0-4fc1-83a5-dc47dc3ea283.gif)
<br>

위와 같은 반응형 컴포넌트를 구성하기 위해서는 처음에 media-query 사용을 생각하였다. 하지만 이는 반응형으로 단순 스타일 변경이 아니고 state를 변경해야 하기에 적합하지 않은 방법이었다.
따라서, 아래와 같이 구성하였다.
- window resize event 를 등록
- window size가 변경될 때 마다 window size(XL or L)를 판별
- size에 따라 state가 변경.
<br>
<br>
<br>

### 3. 반응형 #2, Overlay 시 스크롤제어

이 프로젝트에서는 오버레이효과를 라이브러리 없이 다음과 같이 구성헸습니다.

window가 L사이즈 이고, 이 때 SideBar가 Open 된다면,
- `<Overlay>` Component가 화면을 덮는다.
- `<SideBar>` Component가 `<Overlay>` 컴포넌트 위에 위치한다.
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
<br>

![ezgif com-gif-maker (12)](https://user-images.githubusercontent.com/34260967/144220398-38421b44-76d2-4490-bf6d-c72d94731acf.gif)

위와 같이 `<Overlay>`로 어두운 효과를 주었지만 의도와 다르게 스크롤바는 작동하는 문제가 있었다. 이를 다음과 같이 해결하였다.
- 이 스크롤바는 main이 늘어남에 따라 document에서 발생하는 것이기 때문에 `document.body.classList.add("scroll-in-overlay");` 를 사용하여 `<Overlay>`가 나타날때 className을 부여하였다.
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
<br>
<br>


### 반응형 #3, 스크롤바 위치 기억

scrollbar 를 주의해서 봐주세요.
<br>

![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/34260967/144235334-de73e7f1-06b3-41f6-8f98-179bb781c2ba.gif)


##### 문제발생 흐름과 원인

- `<SideBar>`가 열리고 `<Overlay>`가 나타남.
- 이 때, scroll 기능을 막기 위해 아래와 같은 스타일이 적용 됨.
   ```css
   .body {
      position:fixed;
      overflow-y:scroll;
   }
   ```
   <br>

- `position:fixed` 속성으로 인해 scroll의 존재가 사라짐.
- `<SideBar>`가 닫히고 `<Overlay>`가 사라짐.
- `position` 속성이 초기화되고, 스크롤의 위치도 초기화되어 새로 생성됨.
<br>

위의 문제를 해결하기 위하여, 아래의 hook을 이용하였다.
- `useState` : `isWindowXL, isOpenSideBar`
- `useEffect` 
- `useRef` 
<br>

`isWindowXL, isOpenSideBar`가 변경될 때마다 `useEffect`로 현재 스크롤의 위치를 기억하고, `useRef`를 활용하여 리랜더링되어도 기억된 스크롤의 위치가 초기화 되지 않게 하였다.
<br>
<br>

### 부모-자식 간의 hover 문제

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
<br>
<br>


### 테마 설정 (모든 페이지에 적용)

![ezgif com-gif-maker (14)](https://user-images.githubusercontent.com/34260967/144256781-d381daeb-9b5e-4bb0-a90b-9df52448107a.gif)

- 최상위 노드인 `<App>` 내에 `themeState`를 선언하고 `useContext`를 이용하여 하위 노드에 `themeState`를 내려준다.
- `themeState` 에 따라 className을 추가하고, 추가된 className에 해당하는 테마의 스타일을 지정해준다. (아래 예시 참고)
   ```css
   .main {
      width: calc(100% - $side-width);
      position: absolute;
      top: $header-height;
      left: $side-width;
      box-sizing: border-box;
      min-height: calc(100% - $header-height);
   }
   .main-darkTheme {
      background-color: #181818;
   }  
   ```
- `themeState`가 변경되면, 새로고침하여도 적용 될 수 있게, `localstorage`에 저장


테마 설정에 따른 스타일변경에서 `styled-components`의 필요성을 절실히 느꼈다. `themeState`에 따라 style을 변경하기 위해 하나하나 className을 하나하나 추가하는 고생을 했다.
<br>
<br>


### 언어 설정 (모든 페이지에 적용)


![ezgif com-gif-maker (15)](https://user-images.githubusercontent.com/34260967/144257724-576cfcf7-1f9d-4b14-beb1-1ee3fcadc98d.gif)

언어 설정을 적용하기 위해 다음과 같은 방법을 생각했다.
1. 모든 text 데이터를 적용된 `languageState`에 따라 switch문으로 처리.
이 방법은 가장 단순하고 직관적이다. 하지만 유지 보수 측면에서 큰 문제가 있다. 현재는 언어 설정에 한국어, 영어 뿐이지만, 만일 독일어, 일본어, 러시아어 등등이 추가 된다면 어떠할까. 당연히 그만큼 코드라인이 늘어나게 되며, 유지보수가 힘들어진다. 이유를 논리적으로 생각하지 않아도, 쓰면 안될것 같은 직감이 든 방법이다.
<br>

2. 서로 관련된 text 데이터를 object로 만들어 `key : languageState`에 따라 다른 데이터 저장하는 방법.(채택)
object로 만들어 국가별 언어를 지정해준다면, 관리하기 쉽고, 한줄의 코드로 줄일 수 있다. 그리고 지금은 서버와 통신을 하고 있지 않지만, 나중에 서버에서 데이터를 내려받아서 데이터를 랜더링 하는 상황까지 생각한다면 object로 관리하는 것이 좋다고 생각하여 채택하였다. 하지만 어떠한 구조로 데이터를 object로 만들것인가에 대해서 더 생각해야한다. 자세한 설명은 아래에 있다.

데이터가 어떤 구조여야 하는가를 생각하면서 실제 데이터구조를 변경하고 적용해 보았으며, 아래는 그에 따른 데이터구조의 변화를 나타낸다.

1. 가장 처음 쓰였던 데이터 구조(언어설정 적용 전)
   ```javascript
   data = [
      {
         title : "item1",
         image : <ImageFile1 />,
      },
      {
         title : "item2",
         image : <ImageFile2 />,
      },
      ...
   ]
   ```
   위와 같은 방식으로 배열의 원소로 object를 넣었었다. 이렇게 한 이유는 map(), forEach() 등 배열함수를 쓰기 위함이었다.
   <br>

2. 언어설정을 위한 데이터셋 1
   ```javascript
   data = [
      {
         title : {
            KOR : "아이템1",
            EN : "item1",
         },
         image : <ImageFile1 />,
      },
      {
         title : {
            KOR : "아이템2",
            EN : "item2",
         },
         image : <ImageFile2 />,
      },
   ]
   ```
   처음엔 위와 같은 방식으로 나라별로 언어를 설정하기만 하면 되는줄 알았다. 단순 반복으로 랜더링하는 데이터에서는 문제없이 작동했지만, 특정 아이템 데이터를 가져오는 것에서 문제가 생겼다. key값이 index인 배열이기 때문에 생긴 문제엿다. 그래서 key값을 가지는 object로 변경해야할 필요성을 느꼈다. 
   <br>

3. 언어설정을 위한 데이터셋 2
   ```javascript
   language_data = {
      KOR : {
         item1 : "아이템1",
         item2 : "아이템2",
      },
      EN : {
         item1 : "item1",  
         item2 : "item2",
      }
   };
   data_data = {
      item1 : {
         image : <ImageFile1 />
      },
      item2 : {
         image : <ImageFile2 />
      }
   };
   ```
   데이터셋을 `object`로 변경했다. 그리고  `text` 데이터가 아닌 `image`나 다른 부가적인 데이터를 분리하였다. 이렇게 한 이유는 `text`데이터가 아닌 다른 데이터들은 공통된 부분이고, 한 종류의 언어가 추가될 때, 쉽게 데이터에 추가하기위해서이다. 하지만 이 데이터셋을 적용하면서 잘못된 판단이었다고 생각했다. 하나의 데이터를 두개의 데이터로 나누었기 때문에, 유지보수가 어려워졌고, 가독성도 많이 떨어졌기 때문이다.
   <br>

4. 언어설정을 위한 데이터셋 3 (채택)
   ```javascript
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
   ```
   최종 결정된 데이터 셋이다. key값으로 데이터 순회하지 않아도 찾을 수 있고, 가독성도 좋아졌다. 오직 나의 생각과 시행착오의 결과로 나온 데이터셋이었기 때문에 더욱 뿌듯함을 느꼈다.
<br>
<br>


### 비디오 시청(WatchVideo) 흐름

비디오 시청 페이지(WatchVideo.js)는 링크 공유할 수 있어야 하고, 그 링크를 주소창에 입력하여 접속 할 때에도, 올바르게 동작해야한다. 따라서 링크(url) 안에 존재하는 쿼리스트링으로 재생할 Youtube동영상 id를 받아서 동영상을 재생해야한다.
ex) `https://www.youtube.com/watch?v=YmQD5P6fvlc`

다음은 사용자가 비디오 시청을 하게되는 흐름과 이와 맞는 처리내용이다.
1. main page를 통한 접속
`<Main>`에서 이미 동일한 데이터를 호출 했기 때문에, `<Link>`를 통해 `state`를 `<WatchVideo>` 페이지에 넘겨준다. `state`를 넘겨받은 `<WatchVideo>`는 따로 API 호출을 할 필요 없이 랜더링 할 수 있다.
<br>

2. 주소창에 직접 입력을 통한 접속
이경우에는 `react-router-dom` 의 `<Link>`를 사용하지 않았기 때문에 어떠한 `state`도 존재하지 않는다. 따라서 queryString 으로 받은 Youtube Id를 기반으로 다시 API 호출을 해야한다.
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
<br>
<br>


### Youtube API Call 할당량 줄이기

이 프로젝트를 테스트하면서 가장 큰 어려움은 API 호출 제한에 걸리는 것이었다. 따라서 API 호출시 사용되는 cost를 줄여야겠다고 생각했다.

cost를 줄이는 것에 있어서 두가지 방법이 있다.
1. 리랜더링으로 인한 중복호출 방지
   `useEffect`에 의존성배열을 이용하여 `update`가 아닌 처음 랜더링 되었을때만 api call을 하는것으로 해결.
   한번 호출된 데이터는 `state`로 저장하여, 다른 페이지에서 재호출하는것이 아닌 `state`를 넘겨받는 방법으로 해결.
   <br>

2. 한번의 api 호출에 필요한 cost 줄이기.
   youtube api 공식문서를 참고하였으며, 자세한 내용은 아래에서 다룬다.

Youtube API는 하루단위로 호출 할당량(10,000)이 있다.
https://developers.google.com/youtube/v3/determine_quota_cost

이 프로젝트에서는 사용하는 API Call method는 다음과 같다.
- video.list (cost : 1)
- search.list (cost : 100)
- channel.list (cost : 1)

처음에는 받아오는 데이터(아이템)의 갯수에 따라서 호출량이 달라 진다고 생각하였으나, youtube 공식문서에 따르면 method 종류에 따라 호출량이 달라진다고 한다. 직접 실험해 보았을 때도 동일한 결과를 보여주었다. 이를 기반으로 계산한 페이지별 cost는 아래와 같다.

- main

search : 100  

channel : 1 

total cost : 2

- searchResult

search : 100

channel: 1

total cost : 101

- watchVideo(from main)

search : 100

total cost : 100

- watchVideo(from search or link)

search : 100 

video : 1 

channel : 1

total cost : 102

그리고 다음으로 고객이 비디오를 시청하게되는 흐름에 대한 예상 cost와 실제로 소요된 cost이다. 실제로 소요된 cost는 google cloud flatform 에서 관찰할 수 있다. **단, 사용량이 적용되기 까지 10~20분 정도 걸린다.**

- main > search > watchVideo

  expected cost : 205

  real cost : 206

- (주소창 입력) watchVideo

  expected cost : 102

  real cost : 102

- main > watchVideo

  expected cost : 100

  real cost : 100


youtube api 공식문서에는 소요되는 cost를 줄이기 위해서는 `fields` 매개변수로 필요한 데이터만 중첩없이 받아오라고 한다. (https://developers.google.com/youtube/v3/getting-started#fields)
그래서 `fields`매개변수를 적용하고 test를 해보았다.

- main > search > watchVideo

  expected cost : 205

  real cost : 205

- (주소창 입력) watchVideo

  expected cost : 102

  real cost : 102

- main > watchVideo

  expected cost : 100
  
  real cost : 100

test 결과는 위와 같이 동일했다.(처음 main > search > watchVideo 의 `cost: 206`은 정확하지 않은 결과라고 판단.) 결과적으로 `cost`의 차이는 없었지만, 더 다양하고 방대한 데이터를 사용할 때 효과적일것이라고 예상되어진다.

test함에 있어서 호출 제한이 있고, 소요되는 cost가 바로 반영되지 않아서 굉장히 많은 시간이 걸린 작업이었다. 하지만 api call cost 최적화에 대해 공부하고 실험해볼 수 있는 좋은 경험이었다고 생각한다.

---

## 이번 프로젝트를 하면서..

- SCSS를 사용하여 특성 파악(styled-components의 필요성)
- axios를 사용한 api call
- async/await, promise, then 을 사용한 동기적인 처리
- react-router-dom version6 사용하고 변경된 부분 파악
- 테마, 언어설정 기능 구현으로 상태관리의 필요성 느낌(useContext의 단점 파악)
- 다양한 언어를 지원하는 데이터 구조 고안
- api call에 소요되는 cost 최적화 경험

---

## 향후 계획

1. typeScript 를 활용하기

2. styled-components가 가장 유용하다고 판단하여, 앞으로의 프로젝트에 우선적용

3. 나만의 생각에 갇혀있지 않기. 잘 짜여진 코드, 효율적인 구조를 검색하고 분석하여 프로젝트에 적용해보기.

