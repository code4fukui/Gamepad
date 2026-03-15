# Gamepad

ブラウザでゲームパッド/コントローラーの入力にアクセスするためのライブラリです。

## デモ
[https://code4fukui.github.io/Gamepad/](https://code4fukui.github.io/Gamepad/)

## 機能
- ゲームパッド/コントローラーの入力にシンプルなインターフェースを提供
- 振動機能をサポート

## 使い方
ライブラリを使うには、`Gamepad`モジュールをインポートします:

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
このプロジェクトはMITライセンスの下で提供されています。