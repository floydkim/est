import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

// TODO: 시각적 추정 앱
//  - MVP: 기준 도형에 상대적으로 도형 크기를 조절하는 UI
//    - 결정 누르면 도형 크기를 숫자로 환산하기
//    - 공개 누를때 숫자를 보여주기
const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        {/* 기준 도형 */}
        <View
          style={{
            width: '40%',
            aspectRatio: 1,
            borderRadius: Number.MAX_SAFE_INTEGER,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        {/* TODO: 도형 크기 조절 기능 - 슬라이더를 겹치거나, 도형에 PanResponder */}
        <View
          style={{
            position: 'absolute',
            width: '50%',
            aspectRatio: 1,
            borderRadius: Number.MAX_SAFE_INTEGER,
            opacity: 0.4,
            backgroundColor: 'gold',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
      <TouchableOpacity style={{padding: 20, backgroundColor: 'lightblue'}}>
        <Text>결정 {/* -> RN 모달이든 뭐든 화면전환 */}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
