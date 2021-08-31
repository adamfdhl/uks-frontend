export function truncate(sentence, maxLength) {
  if (sentence.length > maxLength)
    return sentence.substring(0, maxLength) + "...";
  return sentence;
}

export function getSimilarityColor(similarityScore) {
  if (similarityScore >= 0.65) {
    return "#57f331";
  } else if (similarityScore < 0.65 && similarityScore >= 0.5) {
    return "rgb(252, 179, 96)";
  } else {
    return "rgb(243, 86, 59)";
  }
}
