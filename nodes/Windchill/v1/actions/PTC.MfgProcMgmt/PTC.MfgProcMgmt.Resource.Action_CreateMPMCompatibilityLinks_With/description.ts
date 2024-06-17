import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtResourceActionCreateMpmCompatibilityLinksWithDescription: INodeProperties[] = [
	{
		displayName: 'ResourceId',
		name: 'ResourceId-string(path)',
		description: 'Resource ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
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
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
				],
			},
		},
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
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
				displayName: '* MPMCompatibilityLinks',
				name: 'MPMCompatibilityLinks',
				description: 'Mpm Compatibility Links - array',
				type: 'json',
				default: '[\n\t{\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"QueueUsageRate": 0,\n\t\t"TeardownUsageRate": 0,\n\t\t"CompatibilityType": "string",\n\t\t"OtherUsageRate": 0,\n\t\t"ProcessingUsageRate": 0,\n\t\t"ExpressionData": "string",\n\t\t"LastModified": "string",\n\t\t"WaitingUsageRate": 0,\n\t\t"MoveUsageRate": 0,\n\t\t"SetupUsageRate": 0,\n\t\t"ObjectType": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
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
		default: '{\n\t"MPMCompatibilityLinks": [\n\t\t{\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"QueueUsageRate": 0,\n\t\t\t"TeardownUsageRate": 0,\n\t\t\t"CompatibilityType": "string",\n\t\t\t"OtherUsageRate": 0,\n\t\t\t"ProcessingUsageRate": 0,\n\t\t\t"ExpressionData": "string",\n\t\t\t"LastModified": "string",\n\t\t\t"WaitingUsageRate": 0,\n\t\t\t"MoveUsageRate": 0,\n\t\t\t"SetupUsageRate": 0,\n\t\t\t"ObjectType": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Resources('{ResourceId}')/PTC.MfgProcMgmt.CreateMPMCompatibilityLinks",
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
