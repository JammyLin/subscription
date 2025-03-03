import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[id="com.autonavi.minimap:id/fl_splash_container"] >n [text^="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12667556',
        'https://i.gkd.li/import/12750045',
      ],
    },
    {
      key: 10,
      name: '首页-地图页面上方消息提醒',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
      snapshotUrls: 'https://i.gkd.li/import/12642830',
    },
    {
      enable: false,
      key: 11,
      name: '首页-签到卡片',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView[visibleToUser=true] < ViewGroup -(2) ViewGroup > ViewGroup > View[text*="签到"||text*="成长值"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642842',
        'https://i.gkd.li/import/12642845',
        'https://i.gkd.li/import/12818770', // 限定 ImageView[visibleToUser=true]，防止控件不可见时触发规则
      ],
    },
    {
      enable: false,
      key: 12,
      name: '加油页面-优惠券弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView < [desc="关闭"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text="立即领取"]',
      snapshotUrls: ['https://i.gkd.li/import/12642857'],
    },
  ],
});
