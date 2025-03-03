import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '自动签到',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          key: 0,
          name: '自动签到',
          matches: ['[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]'],
          snapshotUrls: 'https://i.gkd.li/import/12929318',
          quickFind: true,
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后，关闭弹窗',
          matches: ['[id="com.alicloud.databox:id/ivClose"]'],
          snapshotUrls: 'https://i.gkd.li/import/13038304',
          quickFind: true,
        },
      ],
    },
    {
      key: 1,
      name: '活动弹窗',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: '[text^="好运盲盒"] >n View > Image + TextView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13228610',
    },
  ],
});
