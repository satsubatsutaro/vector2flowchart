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
  ![mermaid-diagram-2024-02-05-234355](https://github.com/satsubatsutaro/vector2flowchart/assets/812333/62a5ab72-e602-4cd9-aaac-4e8a2b4e6d86)


# 参照/Reference

test.vecは[Avayaサイト](https://documentation.avaya.com/fr-CA/bundle/CCEliteCallVectoringFeatureDescription_r10.1/page/ExampleApplicationUsingAVectorVariableInOtherCommands.html)を参照して作成しました。  
The test.vec was created based on the contents of the [Avaya site](https://documentation.avaya.com/fr-CA/bundle/CCEliteCallVectoringFeatureDescription_r10.1/page/ExampleApplicationUsingAVectorVariableInOtherCommands.html).

# バグ, プルリクエスト等/Bugs, Pull requests

バグ報告やプルリクエストはお気軽に。バグ発見時は上部のissueを起票お願いします。  
Please feel free to report bugs and pull requests. If you find a bug, please submit an issue at the top of the page.

# ライセンス/License
[MIT License](https://github.com/satsubatsutaro/vector2flowchart/blob/main/LICENSE)
