### Install
```text
npm install react-native-styled-components --save
```
or
```text
yarn add react-native-styled-components
```

### Usage example
<img src="https://storage.googleapis.com/anvilapp/npm-pictures/react-native-styled-components/preview.png" width="200"/> 
<br/>

```javascript
import React from 'react';
import {View, Text} from 'react-native';
import styled from 'react-native-styled-components';

const MainContainer = styled(View, {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}, {forwardRef: true});

const DefaultText = styled(Text, {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#333',
});

const RedText = styled(DefaultText, {
    color: 'red',
});

const GreenText = styled(DefaultText, {
    color: 'green',
});

const ColorText = styled(DefaultText, props => ({
    color: props.color,
}));

class App extends Component {

    mainContainerRef;

    render() {
        return (
            <MainContainer ref={ref => this.mainContainerRef = ref}>
                <DefaultText>Default Text</DefaultText>
                <RedText>Red Text</RedText>
                <GreenText>Green Text</GreenText>
                <DefaultText style={{fontSize: 20, color: 'green'}}>Big Green Text</DefaultText>
                <ColorText color='blue'>Color Text</ColorText>
            </MainContainer>
        );
    }
}

export default App;
```
