def reverse(str)
  (str.length / 2).times do |i|
    j = str.length - i - 1
    str[i], str[j] = str[j], str[i]
  end
  str
end
