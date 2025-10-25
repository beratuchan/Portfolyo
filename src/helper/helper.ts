export function isDigit(str:string) {
  // Yalnızca rakamlardan oluşan stringleri kontrol eder
  const rakamRegex = /^[0-9]*$/;
  return rakamRegex.test(str);
}