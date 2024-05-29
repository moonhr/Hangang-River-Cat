# Hangang-River-Cat



### 원격저장소 관련 Git 명령어


1. %git remote update

- 원격저장소의 브랜치를 접근하기 위해서는 remote 갱신이 필요하다. 



2. %git branch -a

- 원격 저장소 + 로컬 저장소의 브랜치를 출력. a대신 -r 을 입력할 경우 로컬 저장소를 제외한 원격 저장소의 브런치만 출력된다.


3. %git rebase

- merge와 달리 base를 변경할 브랜치에서 작업한다. 커밋간 내용은 자동병합되지만 이루어지지 않으면 git에서 충돌메시지가 발생. 수동으로 처리.


4. git checkout -b develop origin/develop

- 원격저장소에 존재하는 브런치인 origin/develop을 로컬 저장소로 가져올 수 있는 명령어.


5. git push origin HEAD:develop

- commit한 내용을 원격저장소 develop에 push할 수 있도록 함.



6.  git branch --set-upstream-to=origin/develop issueTest

- 현재 로컬 브랜치인 issueTest 브랜치에 origin/develop (Github 원격 저장소에 존재하는 브랜치)를 맵핑해준다.
