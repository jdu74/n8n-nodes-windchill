import { INodeProperties } from "n8n-workflow";

export const GetEventInfoDescription: INodeProperties[] = [
	{
		displayName: 'Path',
		name: 'path',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
				operation: [
					'GetEventInfo',
				],
			},
		},
		default: 'GET /EventInfo',
		options: [
			{
				name: 'GET /EventInfo',
				value: 'GET /EventInfo',
				description: 'Get EventInfo - get /EventInfo',
				action: 'GET /EventInfo',
			},
			{
				name: "GET /EventInfo('{EventInfoId}')",
				value: "GET /EventInfo('{EventInfoId}')",
				description: "Get EventInfo for a given EventInfoId - get /EventInfo('{EventInfoId}')",
				action: "GET /EventInfo('{EventInfoId}')",
			},
		],
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$filter',
						name: '$filter-string(query)',
						description: 'Filter - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$top',
						name: '$top-integer(query)',
						description: 'Top - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$skip',
						name: '$skip-integer(query)',
						description: 'Skip - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: '$count',
						name: '$count-boolean(query)',
						description: 'Whether Count - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: '$orderby',
						name: '$orderby-string(query)',
						description: 'Orderby - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
				operation: [
					'GetEventInfo',
				],
				path: [
					'GET /EventInfo',
				],
			},
		},
	},
	{
		displayName: 'EventInfoId',
		name: 'EventInfoId-string(path)',
		description: 'Event Info ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
				operation: [
					'GetEventInfo',
				],
				path: [
					"GET /EventInfo('{EventInfoId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
				operation: [
					'GetEventInfo',
				],
				path: [
					"GET /EventInfo('{EventInfoId}')",
				],
			},
		},
	},
];
