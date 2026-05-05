---
title: OpenAIAPIKeyの取得
description: DigitalCloneVの導入
slug: DigitalCloneV/install/install_openai_apikey
---

## はじめに

ChatGPT(OpenAI)をアプリを通して使用する場合OpenAI APIを使うことになります。<br>
その際にOpenAI API Keyが必要になります。<br>
ここではOpenAI API Keyの取得方法を解説します。<br>

ちなみにOpenAI APIとChatGPT PLUSは別のものなのでご注意ください。<br>

## 登録

まず<a href="https://openai.com/ja-JP/index/openai-api/" target="_blank" rel="noopener noreferrer">OpenAI API</a>のページにいきます。<br>
サイト内から「サインアップ」を探してAPIサービスへの登録を行ってください。<br>

## APIKeyの取得

OpenAIAPIサービスに登録が完了するとPlatformページへ行くことができます。<br>
PlatformのUIはころころ変わるのでこれから参考にする画像とは見た目が違う可能性があります。<br>

![openai](/kiokuya/images/openai/openai_platform.png)

右上の「Create API key」ボタンを押してください。<br>

![openai](/kiokuya/images/openai/openai_createkey.png)

適当な名前(半角英数字)を入力して「Create sevret key」ボタンを押します。<br>

![openai](/kiokuya/images/openai/openai_keycopy.png)

API keyが表示されるので「Copy」ボタンを押してコピーし、テキストファイル等に保存してください。<br>
ページ内の説明にも書いてある通り、このAPI keyはあとから参照することはできません。<br>
一応Platformの項目からAPI keysとしてkeyの管理画面を見ることができますが、keyの文字列を取得することはできません。<br>
必ずこのタイミングでコピーして保存しておいてください。<br>
また、このAPI Keyは流出すると入金したお金を勝手に使われる事になるので充分にご注意ください。<br>
keyの保存が完了したら右下の「Done」を押してください。<br>

## 課金

APIは月額ではなく使用した分だけお金が必要な従量課金になります。<br>
値段は<a href="https://openai.com/ja-JP/api/pricing/" target="_blank" rel="noopener noreferrer">こちら</a>をご確認ください。<br>
また使った分だけ請求が来るのではなく先にチャージしてそこから引いていく形式です。<br>
一応クレジットカードを登録して自動でリチャージする機能もありますがここでは手動での入金を説明します。<br>

![openai](/kiokuya/images/openai/openai_addcredit.png)

赤丸の「Add credits」ボタンを押してください。<br>
UIが変わっていた場合、右上の歯車を押して次のページの左の欄からBillingを選択すると課金用の同じページに行けると思います。<br>

![openai](/kiokuya/images/openai/openai_payment.png)

「Payment methods」の項目からクレジットカードの登録をしてください。<br>
クレジットカードの登録が終わったら「Add to credit balance」ボタンから入金してください。<br>
最初は3ドル程度で充分です。<br>
使用頻度によって追加で入金するようにしてください。<br>
これでOpenAI API keyの使用準備が完了です。<br>
