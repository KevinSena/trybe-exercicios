function convert (value: number, unity: string, conversion: string) {
  const options: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const from: number = options.indexOf(unity);
  const to: number = options.indexOf(conversion);
  return value * (10 ** (to - from));
}

console.log(convert(100, 'cm', 'hm'));
