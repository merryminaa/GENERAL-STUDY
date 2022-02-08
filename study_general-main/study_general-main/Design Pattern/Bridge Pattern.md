# 브릿지 패턴(Bridge Pattern) 
## 개요

:pushpin: 디자인 패턴이란?
* 개념: 소프트웨어 공학의 소프트웨어 설계에서 공통으로 발생하는 문제에 대해 자주 쓰이는 설계 방법을 정리한 패턴
* 목적: 개발 효율성/유지보수성 제고, 프로그램 최적화 
* 종류
  - Gof(Gang of Fout) 디자인 패턴 분류
 
 ![디자인패턴 종류](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Design%20Pattern/Prototype_1_%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%EC%A2%85%EB%A5%98.JPG)

<br>

### 1. 개념

* 의미: 추상화(abstraction)를 구현(implementor)으로부터 분리하여 각각 독립적으로 변화할 수 있도록 하는 패턴
  - "*기능*"과 "*구현*"을 두 개의 별도 클래스로 작성/연결
* 목적: 추상화와 구현이 독립적으로 다른 계층구조를 가짐으로써 확장설계 용이

![장단점]()

### 2. 구현방법

 ![구조]()

 ```
ㅇ Abstraction : 추상 인터페이스 정의
ㅇ RefinedAbstraction : Abstraction에 의해 정의된 인터페이스 확장
ㅇ Implementor :  Abstraction 기능 구현을 위한 인터페이스 정의
ㅇ ConcrereImplementor : Implementor 인터페이스 구현(실제 기능 작성)
 ```
> 브릿지 패턴의 특징으로 보이는 것은?
> > 추상 클래스의 구현부를 인터페이스로 모두 위임(Delegation)하는 행위 

### 3. 적용예시

 ![구조2]()


``` java
package practice;

public interface ReviewLawRequest {
	// 구현부 선언
	String reviewLawRequest(String lawRequestType, String requestName);
}
```

``` java
package practice;

public class Contract implements ReviewLawRequest {
	// 구현부 처리부분(여러 클래스로 확장 가능)

	@Override
	public String reviewLawRequest(String lawRequestType, String requestName) {
		System.out.println("contract review info:" + "type=" + lawRequestType + "," + "requestName=" + requestName);
		return "contract review info is" + "type=" + lawRequestType + "requestName=" + requestName;
	}
}
``` 
``` java
package practice;

public class IntellectualProperty implements ReviewLawRequest {
	@Override
	public String reviewLawRequest(String lawRequestType, String requestName) {
		System.out.println(
				"intellectualProperty review info:" + "type=" + lawRequestType + "," + "requestName=" + requestName);
		return "intellectualProperty review info is" + "type=" + lawRequestType + "requestName=" + requestName;
	}
}

``` 
``` java
package practice;

public class Litigating implements ReviewLawRequest {
	@Override
	public String reviewLawRequest(String lawRequestType, String requestName) {
		System.out.println("litigating review info:" + "type=" + lawRequestType + "," + "requestName=" + requestName);
		return "litigating review info is" + "type=" + lawRequestType + "requestName=" + requestName;
	}
}
``` 


``` java
package practice;

abstract class ReviewInfo {
	// 기능부(각각의 기능에 대해 정의)
	public ReviewLawRequest reviewLawRequest;

	public ReviewInfo(ReviewLawRequest reviewLawRequest) {
		this.reviewLawRequest = reviewLawRequest;
	}

	public abstract String request();
}
``` 

``` java
package practice;

class BizDeptReviewInfo extends ReviewInfo {
	// 기능부를 상속
	private String lawRequestType;
	private String requestName;

	public BizDeptReviewInfo(ReviewLawRequest reviewLawRequest, String lawRequestType, String requestName) {
		super(reviewLawRequest);
		this.lawRequestType = lawRequestType;
		this.requestName = requestName;
	}

	@Override
	public String request() {
		return reviewLawRequest.reviewLawRequest(lawRequestType, requestName);
	}

}
``` 

``` java
package practice;

class BridgePatternTest {
	// 메인클래스
	public static void main(String[] args) {

		ReviewLawRequest Contract = new Contract();
		ReviewLawRequest Litigating = new Litigating();
		ReviewLawRequest IntellectualProperty = new IntellectualProperty();

		Contract.reviewLawRequest("1", "표준계약서 검토요청의 건");
		Litigating.reviewLawRequest("6", "소송진행 검토요청의 건");
		IntellectualProperty.reviewLawRequest("7", "지재권 출원 검토요청의 건");

	}

}
``` 
``` java
contract review info:type=1,requestName=표준계약서 검토요청의 건
litigating review info:type=6,requestName=소송진행 검토요청의 건
intellectualProperty review info:type=7,requestName=지재권 출원 검토요청의 건
``` 

### 4. 비고
* 유사패턴: 어댑터 패턴(Adapter Pattern)
```
ㅇ 공통점: 인터페이스의 디테일을 은닉(구조적으로 동일)
ㅇ 차이점
- 브릿지 패턴: 추상과 구현을 분리하여 변경 시 상호영향 X (확장성 고려)
  - 확장성을 고려하여 구현
- 어댑터 패턴: 인터페이스가 다른 코드에서 기대하는 것과 다를 때 사용(Ex. 기능은 동일하나 함수명이 다를 때)
  - 어떤 코드에 맞게끔 기존 코드 사용 목적
```  

