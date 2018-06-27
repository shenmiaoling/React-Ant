import React, {Component, Fragment} from 'react'
import {Avatar, Divider, Row, Col} from 'antd';
import {Link} from 'react-router'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import './styles.styl'

export default class Home extends Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('home-chart'));

    // 指定图表的配置项和数据
    var option = {
      color: 'rgba(52,152,247,1)',
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: [
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子"
        ]
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [
            5,
            20,
            36,
            10,
            10,
            20
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
  render() {
    return <Fragment>
      <Avatar size="large" icon="user"/>
      <div className='user-info'>
        <span className="info-title">林老师，您好</span>
        <div className='info-item'>春田花花幼儿园
        </div>
      </div>
      <Divider/>
      <div className='tips' style={{
          borderLeft: '5px solid #3498f7'
        }}>
        <div className='tips-title' style={{
            color: '#3498f7'
          }}>开始收费吧</div>
        <div>
          <span style={{
              color: '#949494'
            }}>签约工作全部完成，现在可以收费了，</span>
          <Link style={{
              textDecoration: 'underline'
            }}>
            点击进入新增收费首页！</Link>
        </div>
      </div>
      <div className='tips' style={{
          borderLeft: '5px solid #3498f7'
        }}>
        <div className='tips-title' style={{
            color: '#3498f7'
          }}>正在收费中</div>
        <div>
          <span style={{
              color: '#949494'
            }}>学校正在收费中，</span>
          <Link style={{
              textDecoration: 'underline'
            }}>
            点击查看缴费情况。</Link>
        </div>
      </div>
      <div className='tips' style={{
          borderLeft: '5px solid #FF9900'
        }}>
        <div className='tips-title' style={{
            color: '#FF9900'
          }}>有账单需要审核</div>
        <div>
          <span style={{
              color: '#949494'
            }}>有班级账单还未审核完毕，</span>
          <Link style={{
              textDecoration: 'underline'
            }}>
            点击查看详情</Link>
        </div>
      </div>
      <div className='tips' style={{
          borderLeft: '5px solid #F04844'
        }}>
        <div className='tips-title' style={{
            color: '#F04844'
          }}>已到收费截止日期！</div>
        <div>
          <span style={{
              color: '#949494'
            }}>仍有学生未缴费</span>
          <Link style={{
              textDecoration: 'underline'
            }}>
            点击查看详情</Link>
        </div>
      </div>
      <div className='tips' style={{
          borderLeft: '5px solid #FF9900'
        }}>
        <div className='tips-title' style={{
            color: '#FF9900'
          }}>重要提示！</div>
        <div>
          <span style={{
              color: '#949494'
            }}>1.贵校还没有与支付宝签约教育缴费产品，请点击
            <Link style={{
                textDecoration: 'underline'
              }}>
              查看签约流程，</Link>并按提示步骤进行签约。</span>
          <div style={{
              color: '#949494'
            }}>2、如需联系客服协助，请致电：4006981288</div>

        </div>
      </div>
      <Divider/>
      <Row style={{
          textAlign: 'center'
        }}>
        <Col span={8} className='line'>
          <div className='count-title'>班级数量</div>
          <div className='count'>10</div>
        </Col>

        <Col span={8} className='line'>
          <div className='count-title'>教师数量</div>
          <div className='count'>10</div>
        </Col>

        <Col span={8}>
          <div className='count-title'>在校时间</div>
          <div className='count'>10</div>
        </Col>
      </Row>
      <Divider/>
      <div className='chart-container'>
        <div id="home-chart"></div>
        <div className='payment-record'>
          <Row>
            <Col span={12}>
              <div className='count-title'>今日缴费（人）</div>
              <div className='count'>10</div>
            </Col>
            <Col span={12}>
              <div className='count-title'>今日缴费（元）</div>
              <div className='count'>100</div>
            </Col>
          </Row>
          <Row style={{
              marginTop: '20px'
            }}>
            <Col span={12}>
              <div className='count-title'>本月缴费（人）</div>
              <div className='count'>10</div>
            </Col>
            <Col span={12}>
              <div className='count-title'>本月缴费（元）</div>
              <div className='count'>10</div>
            </Col>
          </Row>
          <Row style={{
              marginTop: '20px'
            }}>
            <Col span={12}>
              <div className='count-title'>上月缴费（人）</div>
              <div className='count'>10</div>
            </Col>
            <Col span={12}>
              <div className='count-title'>上月缴费（元）</div>
              <div className='count'>10</div>
            </Col>
          </Row>
        </div>
      </div>

    </Fragment >
  }
}
