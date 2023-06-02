import React from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg === "blue" ? "white" : "black"};
    padding : 10px;
`

let NewBtn = styled(YellowBtn)`
    font-weight = 900;
`

class Detail2 extends React.Component {
    //컴포넌트 mount시 여기 코드 실행
    componentDidMount(){


    }
    //컴포넌트 update시 여기 코드 실행
    componentDidUpdate(){

    }

    //컴포넌트 unmount시 여기 코드 실행
    componentWillUnmount(){

    }
}


function Detail(props){

    let {id} = useParams();
    let Bindprd = props.surfing.find(function (x){
        return x.id == id
    });

    return(
        <div className = "container">
            <YellowBtn bg = "blue">button</YellowBtn>
            <NewBtn bg = "orange">버튼</NewBtn>
            <div className="row">
                <div className ="col">
                    {/* eslint-disable-next-line */}
                    <img src={`${process.env.PUBLIC_URL}https://cms.accuweather.com/wp-content/uploads/2018/06/surf-${id}.jpg`} width="100%"/>
                    <h4>{Bindprd.title}</h4>
                    <h4>{Bindprd.content}</h4>
                    <p>{Bindprd.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )
}

export default Detail;