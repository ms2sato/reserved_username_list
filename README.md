# 登録されるとつらいユーザー名リストにいろいろとマージした

http://qiita.com/phimcall/items/4c559b70f70ea7f1953b を見て、マージした情報が欲しくなったのでいろいろとマージした。

* http://qiita.com/phimcall/items/4c559b70f70ea7f1953b
* https://github.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/en
* https://github.com/rono23/reserved_word/blob/master/lib/reserved_word/word/site_slug.rb

マージするプログラム書いた。

```
node ./tools/merge.js ./resources/reserverd_word >tmp.txt
```