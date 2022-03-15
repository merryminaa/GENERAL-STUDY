# 데크(Deque) 
## 개요

<br>

### 1. 개념

* 의미: 삽입과 삭제가 리스트의 양쪽 끝에서 모두 발생할 수 있는 선형구조
  - Double Ended Queue의 약자
* 활용: 데이터를 앞/뒤에서 모두 삽입/삭제할 필요가 있거나 데이터의 크기가 가변적인 경우
* 장점: 스택과 큐의 연산을 모두 지원하므로 데이터의 삽입/삭제가 빠름
* 단점: 스택,큐에 비해 비교적 구현이 어렵고, 중간에 삽입/삭제가 어려움


 ![개념](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Material%20Structure/%EA%B0%9C%EB%85%90.jpg?raw=true)


### 2. 메소드(java)

(1) 삽입
  
![삽입메소드](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Material%20Structure/%EC%82%BD%EC%9E%85%EB%A9%94%EC%86%8C%EB%93%9C.png)  
```
1. addFirst(): front 위치에 element 삽입
  - 용량 초과 시 exception 발생
2. offerFirst(): front 위치에 element 삽입
  - 정상처리된 경우 true 리턴, 용량제한에 걸린 경우 false 리턴
3. addLast(): rear 위치에 element 삽입
4. offerLast(): rear 위치에 element 삽입
  - 정상처리된 경우 true 리턴, 용량제한에 걸린 경우 false 리턴
5. add(): addLast()와 동일
6. offer(): offerLast()와 동일
```
(2) 삭제(제거 후 리턴)

![삭제메소드](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Material%20Structure/%EC%82%AD%EC%A0%9C%EB%A9%94%EC%86%8C%EB%93%9C.png)

   
```
1. removeFirst(): front 위치의 element를 제거 후 리턴
  - 덱이 비어있을 경우 exception 발생
2. pollFirst(): front 위치의 element를 제거 후 리턴
  - 덱이 비어있을 경우 null 리턴
3. removeLast(): rear 위치의 element를 제거 후 리턴
  - 덱이 비어있을 경우 exception 발생
4. pollLast(): rear 위치의 element를 제거 후 리턴
  - 덱이 비어있을 경우 null 리턴
5. remove(): removeFirst()와 동일
6. poll(): pollFirst()와 동일
```

(3) 확인/조사
  
![삭제메소드2](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Material%20Structure/%EC%82%AD%EC%A0%9C%EB%A9%94%EC%86%8C%EB%93%9C2.png)   
```
1. getFirst(): front 위치의 element를 제거하지 않고 리턴
  - 덱이 비어있을 경우 exception 발생
2. peekFirst(): front 위치의 element를 제거하지 않고 리턴 
  - 덱이 비어있을 경우 null 리턴
3. getLast(): rear 위치의 element를 제거하지 않고 리턴
  - 덱이 비어있을 경우 exception 발생
4. peekLast(): rear 위치의 element를 제거하지 않고 리턴
  - 덱이 비어있을 경우 null 리턴
5. peek(): peekFirst()와 동일
```
(4) 기타

```
1. removeFirstOccurrence(Object o): 덱의 front부터 탐색하여 입력한 Object o와 동일한 첫 element를 제거
  - Object o 와 같은 엘리먼트가 없으면 덱에 변경 발생X
2. removeLastOccurrence(Object o): 덱의 rear부터 탐색하여 입력한 Object o와 동일한 첫 element를 제거 
  - Object o 와 같은 엘리먼트가 없으면 덱에 변경 발생X
3. element(): removeFirst()와 동일
4. addAll(): 입력 받은 Collection의 모든 데이터를 덱의 뒤쪽에 삽입턴
5. push(): addFirst()와 동일
6. pop(): removeFirst()와 동일
7. remove(Object o): removeFirstOccurrence(Object o)와 동일
8. contain(Object o): 덱에 Object o와 동일한 엘리먼트가 포함되어 있는지 확인
9. size(): 덱의 크기 확인
10. iterator(): 덱의 앞쪽부터 순차적으로 실행되는 이터레이터(iterator)를 얻어옴
11. descendingIterator(): 덱의 뒤쪽부터 순차적으로 실행되는 이터레이터(iterator)를 얻어옴
```

![메소드요약](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Material%20Structure/%EB%A9%94%EC%86%8C%EB%93%9C%EC%9A%94%EC%95%BD.png)



### 3. 구현방법(java)

  
![데크계층](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Material%20Structure/%EB%8D%B0%ED%81%AC%EA%B3%84%EC%B8%B5.png)

* 구조적으로 Queue의 기능을 양방향으로 확장한 개념이므로, Queue 인터페이스를 상속받아서 구현
* Deque 인터페이스
  - Deque 인터페이스를 구현한 클래스
    - LinkedList
    - ArrayDeque
``` java
Deque<Type> d = new LinkedList<Type>();
Deque<Type> d = new ArrayDeque<Type>();
```

### 4. 참고

[백준 알고리즘 예제](https://www.acmicpc.net/problem/10866)


