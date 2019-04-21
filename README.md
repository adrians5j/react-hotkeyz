# ⌨ react-hotkeyz
[![Build Status](https://travis-ci.org/doitadrian/react-hotkeyz.svg?branch=master)](https://travis-ci.org/doitadrian/react-hotkeyz)
[![Coverage Status](https://coveralls.io/repos/github/doitadrian/react-hotkeyz/badge.svg?branch=master)](https://coveralls.io/github/doitadrian/react-hotkeyz?branch=master)
[![](https://img.shields.io/npm/dw/react-hotkeyz.svg)](https://www.npmjs.com/package/react-hotkeyz) 
[![](https://img.shields.io/npm/v/react-hotkeyz.svg)](https://www.npmjs.com/package/react-hotkeyz)
![](https://img.shields.io/npm/types/react-hotkeyz.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  
A component that enables registration of hotkeys per z-index. 

Before:
![A broken example](./docs/keys-no.gif)

With `react-hotkeyz`:

![A working example](./docs/keys-yes.gif)

## Install
```
npm install --save react-hotkeyz
```

Or if you prefer yarn: 
```
yarn add react-hotkeyz
```

## Quick Example:
🤞
 
```javascript
import { useHotkeys, Hotkeys } from "react-hotkeyz";
```

More examples on https://react-hotkeyz.netlify.com.

## Additional information
1. Only listeners from current z-index are triggered
2. Uses `is-hotkey` lib
3. Only one key press listener is registered
4. When there are no active callbacks, event listener is completely removed 
5. When trying to register the same shortcut on the same z-index, an error will be thrown
6. Can be used as a hook or a HOC

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5121148?v=4" width="100px;"/><br /><sub><b>Adrian Smijulj</b></sub>](https://github.com/doitadrian)<br />[💻](https://github.com/doitadrian/react-hotkeyz/commits?author=doitadrian "Code") [📖](https://github.com/doitadrian/react-hotkeyz/commits?author=doitadrian "Documentation") [💡](#example-doitadrian "Examples") [👀](#review-doitadrian "Reviewed Pull Requests") [⚠️](https://github.com/doitadrian/react-hotkeyz/commits?author=doitadrian "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
