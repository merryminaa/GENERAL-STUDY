# git-flow 전략 
## 개요

<br>

### 1. 개념

* 의미: Git이 새롭게 활성화되던 2010년 Vincent Driessen이 개인 블로그를 통해 제안한 브랜치 모델을 쉽게 사용 가능하도록 몇개의 명령으로 구현해놓은 git의 확장
  - 가장 대표적인 Git 브랜치 전략으로, 현재는 거의 표준 방법론으로 간주
  - 개발환경에 따라 수정하고 변형하여 사용
* 목적: 명시적으로 버전이 지정 or 여러 버전의 소프트웨어를 개발하는 경우 효율적인 브랜치 관리방법 제시
* 장점
  - 여러 상황에 일관된 대처 가능
  - 신속한 배포, 업데이트, 수정 가능
* 단점
  - 브랜치 파생 구조로 인해 복잡도 有
  - 상황에 따라 쓰이지 않거나 포지셔닝이 모호한 브랜치가 존재

### 2. 브랜치 구분

 * 브랜치 구분
   
```
- 항상 존재하는 메인 브랜치: master, develop
- 필요에 따라 생성하는 보조 브랜치: feature, hotfix, release
```

 ![브랜치구분](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Git/%EB%B8%8C%EB%9E%9C%EC%B9%98%EA%B5%AC%EB%B6%84.png)

 <br>

### 3. 브랜치 관리

 * 브랜치 종류

:round_pushpin: (1) 메인 브랜치

   1. master 브랜치

	- 배포 가능한 상태만을 관리
   2. develop 브랜치
   
	- 다음 배포 건을 개발하는 브랜치
    - 통합 브랜치 역할, 평소에는 develop 브랜치를 기반으로 개발 진행

 ![메인브랜치](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Git/%EB%A9%94%EC%9D%B8%EB%B8%8C%EB%9E%9C%EC%B9%98.png)



<br>

:round_pushpin: (2) 보조 브랜치



   3. feature 브랜치
	
	- 기능을 개발하는 브랜치로, develop 브랜치(잘 동작하는 기존 개발코드 보관)로부터 새로 변경될 개발코드를 분리하고 각각 보존하는 역할	
	- 기능 완성시까지 유지하며, 완성 시에는 develop 브랜치로 merge한 뒤 삭제
  > derive from : develop
  >> merge to : develop
```
ex) feature/login
```

 ![feature](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Git/feature.png)


<br>
 

   4. release 브랜치

	- 배포를 위한 최종 버그 수정 등의 개발작업을 수행하는 브랜치
	- QA를 위해 develop 브랜치로부터 release 브랜치 생성
	- 배포 가능한 상태가 되면 master 브랜치로 병합, 출시된 master 브랜치에 버전 태그 추가
	- release 브랜치에서 기능 점검 과정에서 발견한 버그 수정사항은 반드시 develop 브랜치에도 적용 필요(배포 완료 후 develop 브랜치에도 merge)
  > derive from : develop
  >> merge to : develop, master
```
ex) release-1
```

![release](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Git/release.png)

<br>



   5. hotfix 브랜치
	
	- 배포한 버전에서 긴급 수정 필요 시 master 브랜치에서 분리하는 브랜치
	- hotfix 브랜치에서 작업하는 동안 develop 브랜치에서 작업 동시 진행 가능
	- hotfix 브랜치에서 이루어진 수정사항은 반드시 develop 브랜치에도 적용하여 문제가 된 부분 처리 필요(develop 브랜치에도 merge)
  > derive from : master
  >> merge to : develop, master
```
ex) hotfix-1
```
 ![hotfix](https://github.com/merryminaa/GENERAL-STUDY/blob/master/capture/Git/hotfix.png)

<br>

### 4. 기타 브랜치 전략
* Github-flow
  - git-flow 의 브랜치 전략의 복잡성 및 적용 어려움 보완을 위해 생겨난 전략
  - master 브랜치 하나만을 가지고 진행
* Gitlab-flow
  - 복잡성을 낮추고 효율을 높이고자 생겨난 전략
  - master, feature, production 브랜치 존재


<br>


### 5. 참고

[우린 Git-flow를 사용하고 있어요 from 우아한형제들 기술블로그](https://techblog.woowahan.com/2553/)

[A successful Git branching model by Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)