require_relative 'reverse'

RSpec.describe :reverse do
  let(:word) { 'house' }

  it 'returns the string backwards (odd length)' do
    backwards = word.reverse
    expect(reverse(word)).to eq backwards
  end

  it 'returns the string backwards (even length)' do
    word = "#{word}s"
    backwards = word.reverse
    expect(reverse(word)).to eq backwards
  end

  it 'mutates the original object' do
    expect(reverse(word)).to be word
  end
end
