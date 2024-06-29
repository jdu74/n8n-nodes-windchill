import * as AuditRecordEventInfoGetEventInfo from './AuditRecord.EventInfo.GetEventInfo';
import * as GetAuditRecord from './GetAuditRecord';
import * as GetAuditRecords from './GetAuditRecords';
import * as GetEventInfo from './GetEventInfo';

import { INodeProperties } from 'n8n-workflow';

export {
	AuditRecordEventInfoGetEventInfo,
	GetAuditRecord,
	GetAuditRecords,
	GetEventInfo,
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
					'PTC.Administration',
				],
			},
		},
		default: '/Windchill/servlet/odata/v2/Administration',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
			},
		},
		default: 'GET /AuditRecords',
		options: [
			{
				name: 'AuditRecord.EventInfo.GetEventInfo',
				value: "GET /AuditRecords('{AuditRecordId}')/EventInfo",
				description: "Get EventInfo - get /AuditRecords('{AuditRecordId}')/EventInfo",
				action: 'AuditRecord.EventInfo.GetEventInfo',
			},
			{
				name: 'GetAuditRecord',
				value: "GET /AuditRecords('{AuditRecordId}')",
				description: "Get AuditRecord for a given AuditRecordId - get /AuditRecords('{AuditRecordId}')",
				action: 'GetAuditRecord',
			},
			{
				name: 'GetAuditRecords',
				value: 'GET /AuditRecords',
				description: 'Get AuditRecords - get /AuditRecords',
				action: 'GetAuditRecords',
			},
			{
				name: 'GetEventInfo',
				value: 'GetEventInfo',
				description: 'Get EventInfo - get /EventInfo',
				action: 'GetEventInfo',
			},
		],
	},
	...AuditRecordEventInfoGetEventInfo.description,
	...GetAuditRecord.description,
	...GetAuditRecords.description,
	...GetEventInfo.description,
];
