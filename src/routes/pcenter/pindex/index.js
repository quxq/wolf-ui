/**
 * Created by quxiangqian on 2017/12/6.
 */
/**
 * Created by quxiangqian on 2017/12/6.
 */
import React from 'react'
import { BorderLayout, Tab } from 'wolf'

import LeftLayout from './Left'
import RightLayout from './RightLayout'
import CenterLayout from './CenterLayout'


export default class PcenterIndex extends React.Component {
  render () {
    return (
      <BorderLayout leftWidth={221} topHeight={0} rightWidth={271}>
        <BorderLayout.Item solt="left" style={{ background: '#fff', borderRight: 'solid 1px #efefef' }}>
          <LeftLayout />
        </BorderLayout.Item>
        <BorderLayout.Item solt="right" style={{ background: '#efefef', borderLeft: 'solid 1px #efefef' }}>
          <RightLayout />
        </BorderLayout.Item>
        <BorderLayout.Item solt="center" style={{ background: '#efefef' }}>
          <CenterLayout />
        </BorderLayout.Item>

      </BorderLayout>
    )
  }
}
