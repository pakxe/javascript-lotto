import { isExpectedArrayLength } from "../utils/checkLength.js";
import { generateRandomNumbers } from "../utils/generateRandomNumbers.js";
import { isOverlapped } from "../utils/isOverlapped.js";
import { sortNumbersAscend } from "../utils/sortNumbersAscend.js";
import LottoNumber from "./LottoNumber.js";
import { ERROR_MESSAGE } from "../error/ErrorMessage.js";
class Lotto {
  static NUMBER_COUNT = 6;
  static SEPARATOR = ",";
  #numbers;

  constructor(numbers) {
    // NOTE: 생성자의 타입이 다양할 때 이렇게 조건문을 걸어서 판별하는게 옳을까요?
    if (typeof numbers === "string") this.#constructorWithNumStr(numbers);
    if (numbers === undefined) this.#constructorWithoutArg();

    this.#numbers = sortNumbersAscend(this.#numbers).map((num) => new LottoNumber(num));
  }

  // 오버로딩
  #constructorWithNumStr(numbers) {
    const parsedNumbers = numbers.split(Lotto.SEPARATOR).map(Number);

    this.#validate(parsedNumbers);

    this.#numbers = parsedNumbers;
  }

  #constructorWithoutArg() {
    this.#numbers = generateRandomNumbers(LottoNumber.MIN, LottoNumber.MAX, Lotto.NUMBER_COUNT);
  }

  get() {
    return this.#numbers.map((num) => num.get());
  }

  #validate(numbers) {
    // 중복없이 6개가 아닌 로또 넘버가 들어온 경우와 중복있는 로또 넘버가 들어온 경우의 오류를 다르게 주기 위해
    if (!isExpectedArrayLength(numbers, Lotto.NUMBER_COUNT))
      throw new Error(ERROR_MESSAGE.lottoNumbersTooManyOrLess);

    if (isOverlapped(numbers)) throw new Error(ERROR_MESSAGE.lottoNumbersOverlapped);
  }

  checkHaveBonus(bonusLottoNumber) {
    const isAlreadyHave = this.#numbers.some((num) => num.get() === bonusLottoNumber);

    if (isAlreadyHave) throw new Error(ERROR_MESSAGE.bonusNumberOverlapped);
  }
}

export default Lotto;
