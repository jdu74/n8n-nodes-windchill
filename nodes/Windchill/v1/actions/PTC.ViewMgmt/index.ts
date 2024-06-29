import * as GetView from './GetView';
import * as GetViews from './GetViews';

import { INodeProperties } from 'n8n-workflow';

export {
	GetView,
	GetViews,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ViewMgmt',
				],
			},
		},
		default: '/Windchill/servlet/odata/v2/ViewMgmt',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ViewMgmt',
				],
			},
		},
		default: 'GET /Views',
		options: [
			{
				name: 'GetView',
				value: "GET /Views('{ViewId}')",
				description: "Get View for a given ViewId - get /Views('{ViewId}')",
				action: 'GetView',
			},
			{
				name: 'GetViews',
				value: 'GET /Views',
				description: 'Get Views - get /Views',
				action: 'GetViews',
			},
		],
	},
	...GetView.description,
	...GetViews.description,
];
