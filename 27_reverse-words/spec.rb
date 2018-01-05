require_relative 'reverse_words'

RSpec.describe :reverse_words do
  let(:sentence) { 'find you will pain only go you recordings security the into if' }
  reversed = 'if into the security recordings you go only pain will you find'

  it 'returns the sentence with words backwards (even length)' do
    expect(reverse_words(sentence)).to eq reversed
  end

  # it 'returns the sentence with words backwards (odd length)' do
  #   sentence = "#{sentence} even"
  #   reversed = "even #{reversed}"
  #   expect(reverse_words(sentence)).to eq reversed
  # end

  # it 'mutates the original object' do
  #   expect(reverse_words(sentence)).to be sentence
  # end
end
