# vector2mermaid.js

このスクリプトはAvayaのvectorをMermaid記法に変換することで、最終的にフロー図(flowchart)を作成することを目的としたスクリプトです。  
Mermaid記法に変換した後は[Mermaid-cli](https://github.com/mermaid-js/mermaid-cli)や[Mermaid Live Editor](https://mermaid.live/edit)でpngやsvg形式にすることができます。  
This script is intended to create flowcharts by converting Avaya vectors to Mermaid notation.
After converting to Mermaid notation, you can use [Mermaid-cli](https://github.com/mermaid-js/mermaid-cli) or [Mermaid Live Editor](https://mermaid.live/edit) to convert to png or svg format.

# 要件/Requirements

Node.jsのv18.17.0で動作を確認しています。  
I have tested on v18.17.0 of Node.js.

# 使用方法/Usage

Avaya vectorを添付のtest.vecのような形式で保存します。
その後、下記のコマンドのように第2引数に保存した.vecファイルを指定して実行します。  
Save the Avaya vector in a format like the attached test.vec.  
Then, execute the command as shown below, specifying the saved .vec file as the second argument.

```
node vector2mermaid.js 保存したファイルパスファイル名.vec
```

ファイル化する場合にはリダイレクトをしてください。  
Please redirect if you want to file.

```
node vector2mermaid.js 保存したファイルパスファイル名.vec > hoge.mmd
```

  
# 生成例/Example

添付のtest.vecをpngに変換した例です。  
This is an example of converting the attached test.vec to png.
  

# 参照/Reference

test.vecは[Avayaサイト](https://documentation.avaya.com/fr-CA/bundle/CCEliteCallVectoringFeatureDescription_r10.1/page/ExampleApplicationUsingAVectorVariableInOtherCommands.html)を参照して作成しました。  
The test.vec was created based on the contents of the [Avaya site]((https://documentation.avaya.com/fr-CA/bundle/CCEliteCallVectoringFeatureDescription_r10.1/page/ExampleApplicationUsingAVectorVariableInOtherCommands.html)).

# ライセンス/License
MIT License