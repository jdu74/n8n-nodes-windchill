import { INodeProperties } from "n8n-workflow";

export const ChangeNoticeResultingLinksPostResultingLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ChangeNoticeId',
		name: 'ChangeNoticeId-string(path)',
		description: 'Change Notice ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: '@odata.type',
				name: '@odata.type',
				description: 'Odata Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Changeable@odata.bind',
				name: 'Changeable@odata.bind',
				description: 'Changeable Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ImpactIntent',
				name: 'ImpactIntent',
				description: 'Impact Intent - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'PendingEffectivities@odata.bind',
				name: 'PendingEffectivities@odata.bind',
				description: 'Pending Effectivities Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ResultedByChangeObjects@odata.bind',
				name: 'ResultedByChangeObjects@odata.bind',
				description: 'Resulted By Change Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ResultedByObjects@odata.bind',
				name: 'ResultedByObjects@odata.bind',
				description: 'Resulted By Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ResultingObjects@odata.bind',
				name: 'ResultingObjects@odata.bind',
				description: 'Resulting Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'TargetTransition',
				name: 'TargetTransition',
				description: 'Target Transition - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"TargetTransition": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"ImpactIntent": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"@odata.type": "string",\n\t"Changeable@odata.bind": "string",\n\t"ResultedByChangeObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"PendingEffectivities@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultingObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"ResultedByObjects@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"POST /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
