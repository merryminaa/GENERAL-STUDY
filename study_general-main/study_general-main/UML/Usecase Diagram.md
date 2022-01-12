# UML(Unified Modeling Language) 
## 유즈케이스 다이어그램(Usecase Diagram)

:pushpin: UML 다이어그램 종류
| 구분 | 종류 | 
|:---:|:---:|
| 구조 | 클래스, 객체, 패키지, 컴포넌트, 배치 다이어그램 |
| 행위 | 유스케이스, 활동, 상태, 순서, 커뮤니케이션 다이어그램 |

<br>

### 1. 개념

* 의미: 사용자(User)의 관점에서 시스템의 활동을 표현
* 목적: 외부에서 본 시스템의 기능을 표현하므로, 실제 내부 비즈니스 로직보다는 사용자의 요구사항 분석을 위한 도구로 활용
* 특징: 사용자와 시스템 사이의 상호작용에 집중
  > Q. 작성시기는 언제?
  >> 유스케이스 다이어그램 작성을 통해 서비스 구체화, 요구사항 선별이 가능하므로 보통 **요구사항 식별과정**에 사용  

### 2. 구성요소
:round_pushpin: **`(1) 액터(Actor)`**
```
1. 의미: 시스템 외부에서 시스템과 상호작용하며 특정한 목적을 취하는 객체
    - 사람, 회사, 다른 시스템, 외부 장비 등

2. 특징: 액터는 반드시 하나 이상의 유스케이스와 상호작용
    - 개인이나 사물을 특정하여 지정 X 
    
3. 종류
 (1) 프라이머리 액터(Primary Actor)
   - 의미: 시스템 사용 주체가 되는 액터
   - 표기: 사람 형태 모형으로 표기
   - 위치: 시스템 왼쪽(역할 작성)

 (2) 세컨더리 액터(Secondary Actor)
   - 의미: 프라이머리 액터로부터 시작되어 시스템과 상호작용하는 다른 외부 시스템(사람X)
   - 표기: <<actor>>라고 명시
   - 위치: 시스템 오른쪽
```
![액터](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EC%95%A1%ED%84%B0.png)
![액터2](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EC%95%A1%ED%84%B02.png)

:round_pushpin:  **`(2) 유스케이스(Usecase)`**
```
1. 의미: 사용자 입장에서 바라본 시스템의 추상적인 기능으로, 시스템의 요구사항을 의미
    - 시스템 내에서 일련의 작업을 수행하기 위한 행위들

2. 표기: 타원형으로 도식화
```
![유스케이스](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EC%9C%A0%EC%8A%A4%EC%BC%80%EC%9D%B4%EC%8A%A4.png)

:round_pushpin:  **`(3) 관계(Relationship)`**
```
1. 의미: 액터-유스케이스, 유스케이스-유스케이스 간 관계 

2. 종류
 (1) 연관관계(Association)
   - 액터-유스케이스 간 상호작용을 의미
   - 실선

 (2) 포함관계(Include)
   - 유스케이스-유스케이스 간 의존성을 의미
   - 하나의 유스케이스 실행 시 포함관계에 있는 유스케이스는 반드시 실행!
   - 점선 화살표, 화살표 중앙에 <<include>> 표기
   - 보통 공통적으로 사용되는 기능 모듈 
 
 (3) 확장관계(Extend)
   - 유스케이스-유스케이스 간 확장성을 의미
   - 하나의 유스케이스 실행 시 확장관계에 있는 유스케이스는 특정상황에서만 실행!
   - 점선 화살표, 화살표 중앙에 <<extend>> 표기

 (4) 일반화관계(Generalization)
   - 부모 유스케이스-자식 유스케이스 간 상속관계를 의미
   - 실선 화살표
```

![관계](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EA%B4%80%EA%B3%84.png)

> Q. 일반화관계 vs 확장관계의 차이점?
> > [일반화관계] 자식 유스케이스는 부모 유스케이스의 속성을 모두 상속 ☞ 부모 유스케이스가 해당되는 모든 포함관계, 확장관계를 만족시켜야 함
> >> [확장관계] 해당 유스케이스는 기존 유스케이스의 속성을 모두 상속 X ☞ 기존 유스케이스의 관계를 만족시킬 필요 X

<br>

### 3. 작성순서
:round_pushpin: **`(1) 시스템 정의`**
- 시스템 영역 및 이름 정의
  
:round_pushpin: **`(2) 액터 식별`**
- 프라이머리 액터, 세컨더리 액터 식별

:round_pushpin: **`(3) 유스케이스 식별`**
- 액터가 요구하는 서비스 식별
- 액터가 시스템과 상호작용하는 행위를 식별

:round_pushpin: **`(4) 관계 정의`**
- 액터-액터 간 관계
- 액터-유스케이스 간 관계
- 유스케이스-유스케이스 간 관계

:round_pushpin: **`(5) 유스케이스 구조화`**
- 두 개 이상의 유스케이스에 존재하는 공통 서비스 추출하여 일반화
- 특정 조건에서 활성화되는 유스케이스 추출

### 4. 작성예시

![예시](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EC%98%88%EC%8B%9C.png)

![예시2](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EC%98%88%EC%8B%9C2.png)

![예시3](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/%EC%98%88%EC%8B%9C3.png)

### 5. 유의사항
```
- 흐름도가 아니므로, 기능이 구현되는 순서대로 작성X
- 모든 기능은 액터가 수행 가능한 개별기능으로 식별, 순서는 필요 시 include, extende 관계로 표현
- include를 문어발처럼 사용X
```
## 6. 기타: 유스케이스 기술서
- 의미: 다이어그램만으로 설명이 부족한 시스템과의 상호작용 과정을 기술하는 문서
- 요소
   - 유스케이스 이름, 액터 이름, 개요, 사전/사후 조건, 기본 흐름, 대체 흐름(기본 흐름에서 선택적으로 실행되는 흐름)

## 7. 참고: 유스케이스 다이어그램 작성 툴/프로그램

[starUML](http://staruml.io)

[draw.io](https://app.diagrams.net)

[Lucidchart](https://www.lucidchart.com/pages)








