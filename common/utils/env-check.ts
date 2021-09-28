class EnvCheck {
  variable: string | undefined;

  variableName: string;
  constructor(envName: string) {
    console.log(process.env[envName]);
    console.log(process.env['NEXT_PUBLIC_API_ORIGIN_URL']);

    this.variable = process.env[envName];
    this.variableName = envName;
  }

  required() {
    if (!this.variable) throw new Error(`provide ${this.variableName}`);

    return this;
  }

  asString() {
    return this.variable ? this.variable.toString() : undefined;
  }

  asInt() {
    return this.variable ? Number.parseInt(this.variable) : undefined;
  }

  asFloat() {
    return this.variable ? Number.parseFloat(this.variable) : undefined;
  }

  asBool() {
    const trueValues = ['true', '1', '+', 'yes', 'y'];
    const falseValues = ['false', '0', '-', 'no', 'n'];

    if (this.variable) {
      if (trueValues.includes(this.variable.toLowerCase())) return true;
      if (falseValues.includes(this.variable.toLowerCase())) return false;

      return undefined;
    } else return undefined;
  }
}

const get = (envName: string): EnvCheck => {
  //console.log(process);

  return new EnvCheck(envName);
};

export { get };
