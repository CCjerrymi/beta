import React,{Component} from 'react';
import './Login.css';

class Login extends Component{

    componentDidMount () {
        var oUl = document.getElementById("line-cont");
        var str = '';
        for(var i=0;i<60;i++){
            str+='<li style="transform: rotate('+i*6+'deg);"></li>';
        }
        oUl.innerHTML = str;

        function change(){
            var myDate = new Date();
            //获取时分秒
            var hour = myDate.getHours();
            var min = myDate.getMinutes();
            var sec = myDate.getSeconds();

            var oHour = document.getElementsByClassName('hour')[0];
            var oMin = document.getElementsByClassName('min')[0];
            var oSec = document.getElementsByClassName('sec')[0];

            oHour.style.transform = 'rotate('+((hour*30+180)+((min*6+180)/120))+'deg)';
            oMin.style.transform = 'rotate('+(min*6+180)+'deg)';
            oSec.style.transform = 'rotate('+(sec*6+180)+'deg)';

        }
        change();
        //获取系统时间
        setInterval(function(){
            change();
        },1000);
    }


    render() {
        return (
            <div className="cont">
                <ul id="line-cont"></ul>
                <div className="hour"></div>
                <div className="min"></div>
                <div className="sec"></div>
                <div className="dot"></div>
            </div>
        );
    }
}

export default Login;