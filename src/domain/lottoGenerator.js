import Lotto from "./Lotto.js";
// 함수를 클래스와 같은 폴더에 배치하는 것이 괜찮을까요? 저희는 도메인의 역할이므로 괜찮다고 생각했습니다. [리뷰어분]의 생각은 어떠신가요?

const lottoGenerator = {
  generateWinningLotto(numbers) {
    return new Lotto(numbers);
  },

  generateRandomLotto(count) {
    return Array.from({ length: count }).map(() => new Lotto());
  },
};

export default lottoGenerator;
