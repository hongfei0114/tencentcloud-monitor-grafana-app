/** CLS当前服务地域列表 */
const LOG_SERVICE_REGION_LIST = [
  {
    regionId: 1,
    region: 'ap-guangzhou',
    regionName: '广州',
    area: '华南地区',
    regionShortName: 'gz',
    oversea: false,
  },
  {
    regionId: 12,
    region: 'ap-guangzhou-open',
    regionName: '广州Open',
    area: '华南地区',
    regionShortName: 'gzopen',
    oversea: false,
  },
  {
    regionId: 11,
    region: 'ap-shenzhen-fsi',
    regionName: '深圳金融',
    area: '华南地区',
    regionShortName: 'szjr',
    oversea: false,
  },
  {
    regionId: 4,
    region: 'ap-shanghai',
    regionName: '上海',
    area: '华东地区',
    regionShortName: 'sh',
    oversea: false,
  },
  {
    regionId: 7,
    region: 'ap-shanghai-fsi',
    regionName: '上海金融',
    area: '华东地区',
    regionShortName: 'shjr',
    oversea: false,
  },
  {
    regionId: 33,
    region: 'ap-nanjing',
    regionName: '南京',
    area: '华东地区',
    regionShortName: 'nj',
    oversea: false,
  },
  {
    regionId: 8,
    region: 'ap-beijing',
    regionName: '北京',
    area: '华北地区',
    regionShortName: 'bj',
    oversea: false,
  },
  {
    regionId: 46,
    region: 'ap-beijing-fsi',
    regionName: '北京金融',
    area: '华北地区',
    regionShortName: 'bjjr',
    oversea: false,
  },
  {
    regionId: 16,
    region: 'ap-chengdu',
    regionName: '成都',
    area: '西南地区',
    regionShortName: 'cd',
    oversea: false,
  },
  {
    regionId: 19,
    region: 'ap-chongqing',
    regionName: '重庆',
    area: '西南地区',
    regionShortName: 'cq',
    oversea: false,
  },
  {
    regionId: 39,
    region: 'ap-taipei',
    regionName: '中国台北',
    area: '港澳台地区',
    regionShortName: 'tpe',
    oversea: true,
  },
  {
    regionId: 5,
    region: 'ap-hongkong',
    regionName: '中国香港',
    area: '港澳台地区',
    regionShortName: 'hk',
    oversea: true,
  },
  {
    regionId: 9,
    region: 'ap-singapore',
    regionName: '新加坡',
    area: '亚太东南',
    regionShortName: 'sg',
    oversea: true,
  },
  {
    regionId: 23,
    region: 'ap-bangkok',
    regionName: '曼谷',
    area: '亚太东南',
    regionShortName: 'th',
    oversea: true,
  },
  {
    regionId: 72,
    region: 'ap-jakarta',
    regionName: '雅加达',
    area: '亚太东南',
    regionShortName: 'jkt',
    oversea: true,
  },
  {
    regionId: 21,
    region: 'ap-mumbai',
    regionName: '孟买',
    area: '亚太南部',
    regionShortName: 'in',
    oversea: true,
  },
  {
    regionId: 18,
    region: 'ap-seoul',
    regionName: '首尔',
    area: '亚太东北',
    regionShortName: 'kr',
    oversea: true,
  },
  {
    regionId: 25,
    region: 'ap-tokyo',
    regionName: '东京',
    area: '亚太东北',
    regionShortName: 'jp',
    oversea: true,
  },
  {
    regionId: 15,
    region: 'na-siliconvalley',
    regionName: '硅谷',
    area: '美国西部',
    regionShortName: 'usw',
    oversea: true,
  },
  {
    regionId: 22,
    region: 'na-ashburn',
    regionName: '弗吉尼亚',
    area: '美国东部',
    regionShortName: 'use',
    oversea: true,
  },
  {
    regionId: 6,
    region: 'na-toronto',
    regionName: '多伦多',
    area: '北美地区',
    regionShortName: 'ca',
    oversea: true,
  },
  {
    regionId: 17,
    region: 'eu-frankfurt',
    regionName: '法兰克福',
    area: '欧洲地区',
    regionShortName: 'de',
    oversea: true,
  },
  {
    regionId: 24,
    region: 'eu-moscow',
    regionName: '莫斯科',
    area: '欧洲地区',
    regionShortName: 'ru',
    oversea: true,
  },
];

export const LOG_SERVICE_REGION_OPTIONS = LOG_SERVICE_REGION_LIST.map((item) => ({
  label: item.regionName,
  value: item.region,
}));

export const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
