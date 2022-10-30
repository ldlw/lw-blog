import sidebar from './sidebar'
import head from './head'
import nav from './nav'
import markdown from './markdown'
// import lang from './lang'
import { footer } from './footer'
const config = {
	title: 'LiuWei的前端博客',
	description: '学习开发日常记录',
	head,
	markdown,
	themeConfig: {
		search: true, //展示搜索
		algolia: {
			appKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: ['tags:guide,api'],
			},
		},
		sidebar,
		nav,
		// demoblock: lang,
		logo: 'http://ldlw.oss-cn-shenzhen.aliyuncs.com/blog/logo.png', // 网站nav栏logo
		lastUpdated: 'Last Updated',
		author: 'LiuWei', //  作者
		authorAvatar: '/small.png', //  作者头像
		record: '湘ICP备2021017661号',
		footer: footer,
	},
}

export default config
