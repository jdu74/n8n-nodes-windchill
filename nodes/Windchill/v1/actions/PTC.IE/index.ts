import * as ActionInvokeIeTask from './Action_InvokeIETask';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionInvokeIeTask,
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
					'PTC.IE',
				],
			},
		},
		default: '/Windchill/servlet/odata/v1/IE',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.IE',
				],
			},
		},
		default: 'POST /InvokeIETask',
		options: [
			{
				name: 'Action_InvokeIETask',
				value: 'POST /InvokeIETask',
				description: 'Function to invoke IE task - post /InvokeIETask',
				action: 'Action_InvokeIETask',
			},
		],
	},
	...ActionInvokeIeTask.description,
];
