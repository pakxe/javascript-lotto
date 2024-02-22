class Command {
  static COMMANDS = ["y", "n"];

  static isExit(input) {
    this.#validate(input);
    return this.COMMANDS[1] === input;
  }

  static #validate(input) {
    const isInvalidCommand = !this.COMMANDS.includes(input);
    if (isInvalidCommand) throw new Error("[ERROR]");
  }
}

export default Command;
