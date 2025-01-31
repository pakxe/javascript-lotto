# 상수

```
  - 로또 1장의 가격은 1,000원이다.
```

```
 - 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
```

# 로또

- [x] 로또 번호는 오름차순으로 정렬하여 6개 갖고있는다.
- [x] 무작위 로또 번호를 생성한다.
- [x] 쉼표로 구분된 로또 번호 문자열이 들어오면 숫자 배열로 바꿔서 저장한다.
  - [x] 각 숫자의 범위는 1이상 45이하의 정수이다.
  - [x] 6개의 숫자여야 한다.
  - [x] 중복이 없어야 한다.

# 로또 생성기

- [x] 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- [x] 입력받은 로또 문자열을 로또로 발행한다.

# 로또 Matcher

- [x] 사용자가 구매한 로또 번호와 당첨 번호를 비교해 등수를 반환한다.

# 로또 금액

- [x] 구입 금액을 받아 유효성 검사를 수행한다.
  - [x] 구입 금액은 1000원 ~ 10억 사이여야 한다.
  - [x] 소수 안된다.
  - [x] NaN은 안된다.
- [x] 총 로또 개수를 반환한다.
- [x] 구입 금액을 반환한다.

# 로또 총 상금 계산기

- [x] 로또 등수를 받아 총 상금을 계산해 반환한다.

# 입력

- [x] 당첨 번호와 보너스 번호를 입력받는다.
- [x] 로또 구입 금액을 입력받는다
- [x] 재시작/종료 여부를 입력받는다.
- [x] 에러가 나면 그 부분부터 입력을 다시 받는다.

# 출력

- [x] 당첨 내역 및 수익률을 출력한다.
- [x] 당첨 통계를 출력한다.
- [x] 에러 메시지를 출력한다.
- [ ] 잔돈도 뽑아준다. (돈 아껴써~~)
- [ ] 10억 이상 받으면 "당신은 로또를 사실 필요가 없습니다. (이미 부자야~~)"

# 유틸

- [x] 길이와 범위가 주어지면 유니크한 숫자 배열을 반환하는 함수
- [x] 숫자 배열을 오름차순으로 정렬해 반환하는 함수
- [x] 숫자 배열의 길이가 6인지 확인하는 함수
- [x] 배열이 특정 값을 포함하는지 확인하는 함수
- [x] 두 배열의 값이 몇 개 일치하는지 확인하는 함수

# 기타

- [x] 재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.
- [x] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨다.
