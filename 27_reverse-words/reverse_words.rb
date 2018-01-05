def reverse_words(sentence)
  word_start_i = 0
  word_end_i = word_start_i
  word_start_j = sentence.length - 1
  word_end_j = word_start_j
  while word_end_i < word_start_j - 1
    until sentence[word_end_i + 1] == ' ' || word_end_i > word_start_j
      word_end_i += 1
    end
    until sentence[word_start_j - 1] == ' ' || word_end_i > word_start_j
      word_start_j -= 1
    end
    word_i = word_start_i..word_end_i
    word_j = word_start_j..word_end_j
    sentence[word_i], sentence[word_j] = sentence[word_j], sentence[word_i]
    word_start_i = word_end_i + 2
    word_end_j = word_start_j - 2
    # p [word_start_i,
    # word_end_i,
    # word_start_j,
    # word_end_j]
    p sentence
  end
  sentence
end
