import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import {View} from 'react-native'
const labels = ["开始","扫描","支付","完成"];
const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#FFB400',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#FFB400',
    stepStrokeUnFinishedColor: '#C5C1AA',
    separatorFinishedColor: '#FFB400',
    separatorUnFinishedColor: '#C5C1AA',
    stepIndicatorFinishedColor: '#FFB400',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#FFB400',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#C5C1AA',
    labelColor: '#C5C1AA',
    labelSize: 25,
    currentStepLabelColor: '#FFB400',
}
export default class Step extends Component{
    render() {
        if(this.props.isShowStep){
            return (
                <View style={{
                    width:'100%',
                    height:'100%',
                    justifyContent:'center',
                }}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.props.currentPosition}
                        labels={labels}
                        stepCount={4}
                    />
                </View>
            )
        }else{
            return null
        }
    }
}

