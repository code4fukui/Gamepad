# Gamepad

ブラウザでゲームパッド/コントローラーの入力にアクセスするためのライブラリです。

## デモ
[https://code4fukui.github.io/Gamepad/](https://code4fukui.github.io/Gamepad/)

## 特徴
- ゲームパッド/コントローラーの入力にアクセスするためのシンプルなインターフェースを提供
- 振動機能をサポート

## 使い方
本ライブラリを使用するには、`Gamepad`モジュールをインポートします。

```javascript
import { Gamepad } from "./Gamepad.js";

const pads = Gamepad.get();
if (pads.length > 0) {
  const pad = pads[0];
  console.log(pad.id, pad.mapping, pad.axes, pad.buttons.map(b => b.value));

  if (pad.buttons[0].pressed) {
    await pad.vibrationActuator.playEffect("dual-rumble", {
      duration: 100,
      weakMagnitude: 1.0
    });
  }
}
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
