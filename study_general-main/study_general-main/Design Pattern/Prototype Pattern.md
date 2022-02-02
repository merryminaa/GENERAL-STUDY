# 디자인 패턴(Design Pattern) 
## 프로토타입(Prototype)

:pushpin: 디자인 패턴이란?
* 개념: 소프트웨어 공학의 소프트웨어 설계에서 공통으로 발생하는 문제에 대해 자주 쓰이는 설계 방법을 정리한 패턴
* 목적: 개발 효율성/유지보수성 제고, 프로그램 최적화 
* 종류
  - Gof(Gang of Fout) 디자인 패턴 분류
 
 ![디자인패턴 종류](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Design%20Pattern/Prototype_1_%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4%EC%A2%85%EB%A5%98.JPG)

<br>

### 1. 개념

* 의미: 원형이 되는(Prototypical) 인스턴스를 사용하여 생성할 객체의 종류를 명시하고, 이렇게 만든 견본을 복사해서 새로운 객체를 생성
* 목적: 이미 유사한 객체가 존재하는 경우 복사를 통해 객체 생성/DB 접근 비용 절감
  - 객체지향에서의 new 연산자를 통한 객체 생성 = 시스템 자원 소모
* 비고: 얕은복사 vs 깊은복사 
```
- 얕은복사: '=' 를 통해 새로운 자원을 할당받지 않고 객체를 복사(해당 객체의 주소값만 공유)
  ☞ 같은 주소를 참조하므로, 하나의 객체 수정 시 다른 객체에 영향 O

- 깊은복사: 물리적으로 할당된 변수를 다른 물리적 변수로 복사
  ☞ Cloneable 인터페이스 사용
  ☞ 같은 주소 참조가 아니므로, 하나의 객체 수정 시 다른 객체에 영향 X
```

### 2. 구현방법

 ![작성방법](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Design%20Pattern/Prototype_2_%EC%9E%91%EC%84%B1%EB%B0%A9%EB%B2%95.JPG)

 ```
* 복사 대상이 되는 클래스
- Cloneable 인터페이스 구현
- Clone() 메서드 오버라이딩
  > java에서 제공하는 Clone()의 경우 최상위 클래스인 Object Class 안에 protected 메서드로 정의되어 있으므로
 ```

### 3. 적용예시

``` java
@RestController
@RequestMapping("/lawRequest")
@Api(value = "/lawRequest", tags = "법무요청", description = "법무요청 관련 APIs")
public class LawRequestController implements Cloneable {

    @Autowired
    LawRequestService lawRequestService;

    @Autowired
    FileService fileService;
    
    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @PostMapping("/list")
    @ApiOperation(value = "법무요청 목록", notes = "법무요청 목록 조회 API", response = LawRequestListResDTO.class, responseContainer = "List")
    public ResponseEntity<PageInfo<LawRequestListResDTO>> getLawRequestListPage(@RequestBody @ApiParam(value = "검색조건", required = false) LawRequestReqDTO param) {
        PageInfo<LawRequestListResDTO> list = lawRequestService.getLawRequestList(param);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/detail")
    @ApiOperation(value = "법무요청 상세", notes = "법무요청 상세 조회 API", response = LawRequestDetailResDTO.class, responseContainer = "LawRequestDetailResDTO")
    public ResponseEntity<LawRequestDetailResDTO> getLawRequestDetail (@RequestBody @ApiParam(value = "검색조건", required = false) LawRequestDetailReqDTO param) {
        LawRequestDetailResDTO lawRequestDetailResDTO = new LawRequestDetailResDTO();

        lawRequestDetailResDTO.setLawRequest(lawRequestService.getLawRequestDetail(param));
        lawRequestDetailResDTO.setFileList(fileService.getLawRequestFileList(param));

        return new ResponseEntity<>(lawRequestDetailResDTO, HttpStatus.OK);
        
    }
}
```

``` java
@RestController
@RequestMapping("/prototype")
@Api(value = "/prototype", tags = "프로토타입", description = "프로토타입 관련 APIs")
public class LawRequestControllerPrototypeTest {

    @Autowired
    LawRequestService lawRequestService;

    @Autowired
    FileService fileService;
    
    @PostMapping("/detail")
    @ApiOperation(value = "법무요청 상세", notes = "법무요청 상세 조회 API", response = LawRequest.class, responseContainer = "LawRequest")
    public LawRequest getCopy(@RequestBody @ApiParam(value = "검색조건", required = false) LawRequestDetailReqDTO param) throws CloneNotSupportedException {
        LawRequest data = lawRequestService.getLawRequestDetail(param);
        
        //깊은복사
        //LawRequest data2 = new LawRequest();
        //data2 = lawRequestService.getLawRequestDetail(param);
        LawRequest data2 = (LawRequest) data.clone();
        
        //데이터 변경
        data2.setLawRequestName("프로토타입 패턴 테스트");
        
        return data2;
    }
}
``` 
 ![원본](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Design%20Pattern/Prototype_3_%EC%A1%B0%ED%9A%8C%EC%BA%A1%EC%B2%98_%EC%9B%90%EB%B3%B8.JPG)
 
 ![변경](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Design%20Pattern/Prototype_3_%EC%A1%B0%ED%9A%8C%EC%BA%A1%EC%B2%98_%EB%B3%80%EA%B2%BD.JPG)

### 4. 비고
* 유사패턴: 팩토리 메서드 패턴(Factory Method Pattern)
* 차이점
```
- 프로토타입 패턴: 기존 객체 값을 가져와서 추가/비교 등 많은 정보가 겹치는 경우 사용
- 팩토리 메서드 패턴: new 연산자를 사용하여 기존 객체와 완전히 다른 정보를 가질 확률이 높은 경우 사용
```  