# PhuotMaps

## Setup
- Install brew first for install node and some requirement modules

Brew homepage: https://brew.sh/

- Install node and watchman by brew 
```
brew install node
brew install watchman
```
- Install react native for run application
```
npm install -g react-native-cli
```
NOTES: For more information you can read in document of facebook 

https://facebook.github.io/react-native/docs/getting-started.html

- To set up your environment, simply run `npm install` (in your terminal) at the root folder

To run the app, use any of the following commands at the root folder
```
yarn start ( or npm start )
react-native run-ios (for ios)
react-native run-android (for android)
```
NOTES: For android you must config ANDROID_HOME first in your android studio environment.

## Project structure
```
│
├── src
│   │
│   ├── Assets
│   │   ├── Font ................. Store font for JBwallet (Hirakakupro for japanese language,UTM for other language)
│   │   ├── Image ................ Store image for JBwallet (logo, notification, textDesign v..v...)
│   │   ├── Lang ................. Language file include EN for English, JP for Japanese language
│   │
│   ├── Common
│   │   ├── globalConstants.js ................... Const variable not change in all app
│   │   ├── globalFunction.js .................... Function using in multiple file like formatNumber or activeSocket
│   │   ├── globalIcon.js ........................ Icon using in all application
│   │   ├── globalRoutes.js ...................... Routes detail for all screen in JBwallet
│   │   ├── globalStyles.js ...................... Styles using in global like Color, Font, textDefault v..v.. 
│   │
│   ├── Controller 
│   │   ├── API ............ Store all api using like etherScan, ethPlorer and AmazonService
│   │   ├── JBLibrary .............. Store Library for convert fiat money and etherLibrary 
│   │   ├── Redux .............. Store redux variable and actions
│   │
│   ├── Frontend 
│   │   ├── Components ............ Store shared component in application like Alert, Input
│   │   ├── Container .............. Store main component use in all application like Container, Tabbar 
│   │   ├── Screen .............. Store all screen of PhuotMaps
│   │
│   ├── PhuotMaps.js .......................... Base started page defined routes and loading redux in store
│
├── index.js
├── package.json
├── jsconfig.json
```

## Application Architecture

### Concepts

The application architecture is a hybrid architecture

**Global state is managed by Redux**

All global states are managed by Redux actions and node.  All views need to render from redux variable will have a connect to redux and loading when redux variable change and deliveried from node.

```
Store Redux -> Node -> ComponentPage -> RenderState
```

### Store Architecture

**Structure**

Each store or substore can contain the following files:

| File                      | Purpose      |
| ------------------------- | ------------ |
| mainActions.js            | Actions for redux |
| reduxStorageActions.js    | Actions for redux store in Async storage |
| mainReducers              | All state of main redux |
| reduxStorageReducers.js   | All state of storage redux |

### Component Architecture

**Structure**

Each screen component will contain the following files:

| File            | Purpose                     |
| --------------- | --------------------------- |
| index.js        | Component state / function  |
| page.js         | Template pure component     |
| styles.js       | Style for component         | 


**Base Components**

All screen components (components with a tabbar) will derive from TabbarContainer.js

All other screen components will drive from BaseContainer.js

**Extend with BaseContainer**

All constant, function in BaseContainer can call from extend page like showAlert, showInternetAlert, showNotification. 

All state and all props will receive from 
```
Screen component -> BaseContainer -> PagePureComponent -> Render
```

**Examples**

The following are good examples to review to understand how to structure components and accesing redux stores:
```
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => ({
  cardData: state.cardData
})

const mapDispatchToProps = (dispatch) => {
  return {
    setInternet: bindActionCreators(setInternet, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopScreen)
```

## Navigation

### Routing
Routes are defined in `./src/Common/globalRoutes.js`

Url Examples
* `<Scene key="languageScreen" component={LanguageScreen} panHandlers={null}/>`

### Navigating between components
**Example**
```
import { Actions } from 'react-native-router-flux'

Actions.splashScreen()
```

## i18n
For internationlization support in templates, all template files should:

```
import I18n from 'assets/Lang'
```

### i18n.json Structure
All i18n JSON files should have the following structure
```
'Initial': {
  'new': 'new',
  'opps': 'Fail!'
},
```
### Referencing
To reference an i18n string, simply call
```
import I18n from 'assets/Lang'

<Text>{I18n.t('<key>.<subKey>')}</Text>
```

## Vector Interface Icons
Redux: https://redux.js.org/

Vector-icon: https://oblador.github.io/react-native-vector-icons/

Animtable : https://github.com/oblador/react-native-animatable

Router: https://github.com/aksonov/react-native-router-flux

I18n: https://github.com/AlexanderZaytsev/react-native-i18n
