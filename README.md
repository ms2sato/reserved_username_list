# 登録されるとつらいユーザー名リストにいろいろとマージした

http://qiita.com/phimcall/items/4c559b70f70ea7f1953b を見て、マージした情報が欲しくなったのでいろいろとマージした。

結果はこれ。

https://github.com/ms2sato/reserved_username_list/blob/master/list.txt

* http://qiita.com/phimcall/items/4c559b70f70ea7f1953b
* https://github.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/en
* https://github.com/rono23/reserved_word/blob/master/lib/reserved_word/word/site_slug.rb


マージするプログラム書いた。list.txtにマージした内容が標準出力に返ってくるのであとは適当にしてください。

```
node ./tools/merge.js ./resources/reserverd_word >tmp.txt
```
