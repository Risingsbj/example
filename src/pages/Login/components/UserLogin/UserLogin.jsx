/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Input, Button, Checkbox, Grid } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';
import './UserLogin.scss';


import {Login_maowang} from '../../../redux/action';
import {Login_mao} from '../../../redux/action';
import {connect} from 'react-redux';



const { Row, Col } = Grid;

// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage =
  'https://img.alicdn.com/tfs/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png';

class UserLogin extends Component {
  static displayName = 'UserLogin';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        account: undefined,
        password: undefined,
        checkbox: false,
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    console.log(1)
    console.log(this.state.value.account)
    this.props.dispatch(Login_maowang(this.state.value.account,this.state.value.password))
    //this.props.dispatch(Login_maowang)
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log('values:', values);
      console.log(this.props);
      hashHistory.push('/');
    });
  };
  handle = (e) => {
   // this.props.dispatch(Login_mao(this.props.passw,444))
   //this.props.dispatch(Login_mao)
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log('values:', values);
      console.log(this.props);
      hashHistory.push('/');
    });
  };  render() {
    const {xingming,passw,handleSubmit,handle}=this.props;
    return (
      <div style={styles.userLogin} className="user-login">
        <div
          style={{
            ...styles.userLoginBg,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div style={styles.contentWrapper} className="content-wrapper">
          <h2 style={styles.slogan} className="slogan">
            欢迎使用 <br /> ICE 内容管理系统
          </h2>
          <div style={styles.formContainer}>
            <h4 style={styles.formTitle}>登录</h4>
            <IceFormBinderWrapper
              value={this.state.value}
              onChange={this.formChange}
              ref="form"
            >
              <div style={styles.formItems}>
                <Row style={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="person"
                      size="small"
                      style={styles.inputIcon}
                    />
                    <IceFormBinder name="account" required message="必填">
                      <Input maxLength={20} placeholder="会员名/邮箱/手机号" />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="account" />
                  </Col>
                </Row>

                <Row style={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="lock"
                      size="small"
                      style={styles.inputIcon}
                    />
                    <IceFormBinder name="password" required message="必填">
                      <Input htmlType="password" placeholder="密码" />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="password" />
                  </Col>
                </Row>

                <Row style={styles.formItem}>
                  <Col>
                    <IceFormBinder name="checkbox">
                      <Checkbox style={styles.checkbox}>记住账号</Checkbox>
                    </IceFormBinder>
                  </Col>
                </Row>

                <Row style={styles.formItem}>
                  <Button
                    type="primary"
                    onClick={this.handleSubmit}
                    style={styles.submitBtn}
                  >
                    登 录
                  </Button>
                </Row>

                <Row className="tips" style={styles.tips}>
                  <a href="/" style={styles.link}>
                    立即注册
                  </a>
                  <span style={styles.line}>|</span>
                  <a href="/" style={styles.link}>
                    忘记密码
                  </a>
                </Row>
              </div>
              
            </IceFormBinderWrapper>
            <Button onClick={handleSubmit}>{xingming}</Button>
            <Button onClick={handle}>{passw}</Button>
          </div>
        </div>
        
      </div>
    );
  }
}

const styles = {
  userLogin: {
    position: 'relative',
    height: '100vh',
  },
  userLoginBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '30px 40px',
    background: '#fff',
    borderRadius: '6px',
    boxShadow: '1px 1px 2px #eee',
  },
  formItem: {
    position: 'relative',
    marginBottom: '25px',
    flexDirection: 'column',
  },
  formTitle: {
    margin: '0 0 20px',
    textAlign: 'center',
    color: '#3080fe',
    letterSpacing: '12px',
  },
  inputIcon: {
    position: 'absolute',
    left: '0px',
    top: '3px',
    color: '#999',
  },
  submitBtn: {
    width: '240px',
    background: '#3080fe',
    borderRadius: '28px',
  },
  checkbox: {
    marginLeft: '5px',
  },
  tips: {
    textAlign: 'center',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '13px',
  },
  line: {
    color: '#dcd6d6',
    margin: '0 8px',
  },
};


//建立一个（从外部的）state对象到（UI组件的）props对象的映射关系
function mapStateToProps(state, ownProps) {
    console.log('5 mapState', state, ownProps);
    
        //hashHistory.push('/');
        return {xingming:state.name,
                passw:state.pas,
                /*username:state.value.account,*/
        }

    // return state;
}

/*//建立UI组件的参数到store.dispatch方法的映射
function mapDispatchToProps(dispatch) {
    console.log(3)
    console.log(account)
    console.log(4)
    return {
        handleSubmit: () => dispatch(Login_maowang),
        handle: () => dispatch(Login_mao)
    }
}
*/
export default connect(mapStateToProps)(UserLogin)
