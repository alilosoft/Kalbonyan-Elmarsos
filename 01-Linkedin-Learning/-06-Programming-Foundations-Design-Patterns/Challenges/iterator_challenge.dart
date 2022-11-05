void main(List<String> args) {
  final languages = ['Java', 'JavaScript', 'Python', 'Dart'];
  print(languages.runtimeType);
  for (final lang in languages) {
    if (lang == 'Dart') print('I love $lang');
  }
}
