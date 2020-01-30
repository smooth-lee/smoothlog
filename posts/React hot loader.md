---
path: /react-hot-loader-사용하기
title: React-hot-loader 사용하기
date: '2020-01-21'
---

react-hot-loader는 코드가 변경되었을때 페이지를 새로고침하지 않고 바뀐 부분만 빠르게 교체해주는 라이브러리다. 리액트 앱 개발을 할때 필수적인 라이브러리는 아니지만, 규모가 커지면 개발 중 수정사항이 생길때마다 새로고침이 되어버리면 입력한 내용이 전부 사라져 다시 입력해야하는 번거로움 같이 개발에 딜레이가 발생되어 흐름이 끊긴다.

예시로 styled-components를 사용할 경우에 스타일이 js안에 있기 때문에 수정할때마다 새로고침이 되는 점이 매우 불편하다.

나 역시 개발을 하면서 파일 저장 시에 새로고침이 되는 문제가 매우 불편했는데 이 라이브러리를 사용하고나서 문제가 해결되었다.

## react-hot-loader 설치

---

```bash
yarn add --dev react-hot-loader

# OR

npm i react-hot-loader --save-dev
```

설치가 완료되었다면 package.json에서 babel 부분을 수정한다.

```js
"babel": {
    "presets": [
      "react-app",
      "mobx"
    ],
    "plugins": [
      "react-hot-loader/babel"
    ]
  },
```

바뀐점은 plugins를 추가해준 것 이외에 따로 변경한 부분은 없다.

나의 경우 CRA(Create-React-App)을 사용하여, package.json에 babel을 수정하기 위해 yarn run eject을 해주었다.

## hot 설정

---

설정을 마쳤다면 프로젝트의 최상위 컴포넌트에서 hot을 불러온 뒤 export default `hot(module)(ComponentName)` 형식으로 작성해주기만하면 된다.

```js
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from 'components/App'
import { hot } from 'react-hot-loader'

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default hot(module)(Root)
```

js 파일을 수정 후에 저장을 눌러보면 기존에 새로고침되던 부분이 이제는 변경된 부분만 알아서 바뀔 것이다.

## 마무리

---

나는 프로젝트 개발을 하면서 저장할 때마다 새로고침되는 문제가 매우 거슬렸는데 이 라이브러리를 사용하고 난 후에는 개발이 수월해졌다. 나와 같은 경험을 겪고있는 주변사람이 있다면 추천해보는 것을 권유한다.
