---
path: /react-hot-loader-사용하기
title: React-hot-loader 사용하기
date: '2020-01-21'
---

# React-hot-loader

react-hot-loader는 코드가 변경되었을때 페이지를 새로고침하지 않고 바뀐 부분만 빠르게 교체해주는 라이브러리다. 리액트 앱 개발을 할때 필수적인 라이브러리는 아니지만, 규모가 커지면 개발 중 수정사항이 생길때마다 새로고침이 되어버리면 개발에 딜레이가 발생되어 흐름이 끊긴다.

예시로 styled-components를 사용하게 되면 스타일이 js안에 있기 때문에 수정할때마다 새로고침이 되는 점이 매우 불편하다고 한다.

나 역시 개발을 하면서 js 파일에서 저장 시에 새로고침이 되는 문제가 매우 불편했는데 이 라이브러리를 사용하고나서 문제가 해결되었다.

한번 사용해보자.

## react-hot-loader 설치

```bash
yarn add --dev react-hot-loader
```

설치가 완료되었다면 package.json에서 babel 부분을 수정하자.

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

package.json에 babel이 안보인다면 yarn run eject을 해야한다.

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

react-hot-loader가 v4가 되면서 작업이 간단해졌다고 한다. 나는 프로젝트 개발을 하면서 저장될때마다 새로고침되는 문제가 매우 거슬렸는데 속이 풀리는 기분이다. 내가 지금 개발 중인 react front 앱 모두 react-hot-loader를 적용시켜야겠다.
