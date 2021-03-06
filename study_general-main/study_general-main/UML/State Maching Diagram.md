# UML(Unified Modeling Language) 
## 상태 머신 다이어그램(State Mahchine Diagram)

:pushpin: UML 다이어그램 종류

![구조도](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/UML/state%20machine/UML%EA%B5%AC%EC%A1%B0.png)

<br>

*****

### 1. 개념

* 의미: 객체의 상태를 표현하기 위해 사용되는 다이어그램
  - 상태 다이어그램(State Diagram), 상태 차트(State Chart)로도 불림 
* 목적: 개별 객체의 행동(동적인 측면)을 모델링함으로써 생명주기 동안 변화하는 상태를 시각화
  - 객체의 상태변화를 상세히 분석
  - 이벤트에 의한 객체의 반응을 분석
  - 객체의 속성이나 동작을 검증
* 특징
  - 설계단계에서 클래스 객체의 동적인 행동방식을 표현하는 데 사용
  
  <br>

  > Q. 언제 사용하면 좋을까?
  >> 상태 다이어그램은 복잡하거나 중요한 특정 개체 내부의 상태를 모니터링/자세한 동작을 기술할 때 사용
  >>>  여러 객체 간 상호작용을 살펴보거나 시스템 내 모든 클래스의 상태를 전체적으로 보고자할 때는 적합 X

<br>


*****

### 2. 구성요소
:round_pushpin: **`(1) 시작상태(First State)`**
```
1. 의미: 프로세스의 시작점
2. 표기: 속이 채워진 원
```

:round_pushpin:  **`(2) 상태(State)`**
```
1. 의미: 프로세스의 상태
2. 표기: 둥근모서리의 네모박스
```

:round_pushpin:  **`(3) 전이/상태 변경(Transition)`**
```
1. 의미: 한 상태에서 다른 상태로의 전환 
2. 표기: 실선 화살표
3. 기타: 실선 화살표 상단에 [전이조건] 기재 가능
  - 특정조건 만족 시 전이를 발생시키기 위해 사용되는 boolean식
```
:round_pushpin:  **`(4) 이벤트(Event)`**
```
1. 의미: 상기 객체의 전이를 유발하는 자극
2. 표기: 실선 화살표 상단 <<이벤트 이름>>
```
:round_pushpin:  **`(5) 종료상태(Final State)`**
```
1. 의미: 예상되는 결과 
2. 표기: 속이 채워진 원을 둘러싼 원
```

![구성요소](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/UML/state%20machine/%EA%B5%AC%EC%84%B1%EC%9A%94%EC%86%8C.JPG)

<br>

*****

### 3. 확장표기법
* 상태 이름 하단에 활동을 추가적으로 기재
  ```
  - entry/action() : 특정 상태로 전이되게 만드는 액션을 정의
  - exit/action() : 특정 상태에서 전이되어 나가게 만드는 액션을 정의
  - do/action() : 특정 상태에 머물러 있는 한 계속 실행되는 액션을 정의
  ```

*****

### 4. 작성예시

![예시](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/UML/state%20machine/%EC%98%88%EC%8B%9C.jpg?raw=true)


*****

### 5. 유의사항
:boom: 설계시 유의점
  - 실제로는 수천/수만개의 상태가 필요하므로 단순화
  - 확장 상태 다이어그램 포맷을 사용하여 간략화
    - 일반 상태 다이어그램 => 전체 
    - 확장 상태 다이어그램 => 디테일(독립된 다이어그램으로 상세내용 기술)

![예시2](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/UML/state%20machine/%EC%98%88%EC%8B%9C2.JPG)

> Q. 상태 다이어그램과 유사한 성격의 다이어그램은?
> > 활동 다이어그램 & 상태 다이어그램 => 알고리즘의 도식화/설계에 효과적
> >> Q. 두 다이어그램 간 차이점은?
> >>> - 활동 다이어그램 : 알고리즘에 의한 결정이나 반복된 활동을 나타날 때 효과적
> >>> - 상태 다이어그램 : 분명하고 명확한 상태를 갖거나 이벤트 주도적인 시스템을 도식화하는 데 유용
 

*****

### 6. 참고: UML 작성 툴/프로그램

[starUML](http://staruml.io)

[draw.io](https://app.diagrams.net)

[Lucidchart](https://www.lucidchart.com/pages)








