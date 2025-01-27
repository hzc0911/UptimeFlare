const pageConfig = {
  title: "贺煦修网站的状态",
  links: [
    { link: 'https://blog.xn--8uqu92f.top/', label: '我的的博客' },
    { link: 'https://xn--8uqu92f.top/', label: '我的主页' },
    { link: 'mailto:hzc100911@163.com', label: '向我发送邮件', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'blog_monitor',
      name: '贺煦修的博客',
      method: 'GET',
      target: 'https://blog.xn--8uqu92f.top/',
    },
    {
      id: 'homepage_monitor',
      name: '贺煦修的主页',
      method: 'GET',
      target: 'https://xn--8uqu92f.top/',
    },
    {
      id: 'shortlink_monitor',
      name: '贺煦修的短链生成器',
      method: 'GET',
      target: 'https://xn--s7y.xn--8uqu92f.top/',
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
    },
  },
}

export { pageConfig, workerConfig }
