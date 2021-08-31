export function truncate(sentence, maxLength) {
  console.log(sentence.length);
  if (sentence.length > maxLength)
    return sentence.substring(0, maxLength) + "...";
  return sentence;
}
