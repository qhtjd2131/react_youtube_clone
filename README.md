# Getting Started with Create React App

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
![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/34260967/141275888-700b2468-a222-45bd-a580-e005928fa0ff.gif)

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

