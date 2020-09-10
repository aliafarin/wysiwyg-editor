import React from 'react';
import { Carousel, Input, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class Login extends React.Component {

  render(){

    return(
      <div id="login-page">
        <div className="my-carousel">
          <Carousel autoplay>
            <div>
              <img src="https://images.unsplash.com/photo-1599496507927-9056debd0f0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1585840887282-4079ccc0e98d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"  />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1599406682452-12614fce9f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"  />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1599014954148-ca560ffea964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"  />
            </div>
          </Carousel>
        </div>
        <div className="login-section">
          <div className="login-form">
            <span className="name">شهرداری تهران</span>
            <span>سیستم یکپارچه مکاتبات اداری</span>
            <form>  
              <Input placeholder="نام کاربری" />
              <Input placeholder="کلمه عبور" />
              <Checkbox>مرا به خاطر بسپار</Checkbox>
              <Button type="primary">ورود</Button>
            </form>
            <a href="">رمز عبور خود را فراموش کرده ام</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;