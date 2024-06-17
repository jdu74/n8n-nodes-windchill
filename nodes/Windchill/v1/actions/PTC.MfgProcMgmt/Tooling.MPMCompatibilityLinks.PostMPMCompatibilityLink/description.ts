import { INodeProperties } from "n8n-workflow";

export const ToolingMpmCompatibilityLinksPostMpmCompatibilityLinkDescription: INodeProperties[] = [
	{
		displayName: 'ToolingId',
		name: 'ToolingId-string(path)',
		description: 'Tooling ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Toolings('{ToolingId}')/MPMCompatibilityLinks",
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Toolings('{ToolingId}')/MPMCompatibilityLinks",
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
					"POST /Toolings('{ToolingId}')/MPMCompatibilityLinks",
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
				displayName: '* CompatibilityType',
				name: 'CompatibilityType',
				description: 'Compatibility Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ExpressionData',
				name: 'ExpressionData',
				description: 'Expression Data - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* MoveUsageRate',
				name: 'MoveUsageRate',
				description: 'Move Usage Rate - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: '* OtherUsageRate',
				name: 'OtherUsageRate',
				description: 'Other Usage Rate - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: '* ProcessingUsageRate',
				name: 'ProcessingUsageRate',
				description: 'Processing Usage Rate - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: '* QueueUsageRate',
				name: 'QueueUsageRate',
				description: 'Queue Usage Rate - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'ReferencedBy@odata.bind',
				name: 'ReferencedBy@odata.bind',
				description: 'Referenced By Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'References@odata.bind',
				name: 'References@odata.bind',
				description: 'References Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* SetupUsageRate',
				name: 'SetupUsageRate',
				description: 'Setup Usage Rate - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: '* TeardownUsageRate',
				name: 'TeardownUsageRate',
				description: 'Teardown Usage Rate - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: '* WaitingUsageRate',
				name: 'WaitingUsageRate',
				description: 'Waiting Usage Rate - number',
				type: 'number',
				default: 0,
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Toolings('{ToolingId}')/MPMCompatibilityLinks",
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
		default: '{\n\t"QueueUsageRate": 0,\n\t"TeardownUsageRate": 0,\n\t"CompatibilityType": "string",\n\t"OtherUsageRate": 0,\n\t"ProcessingUsageRate": 0,\n\t"ExpressionData": "string",\n\t"WaitingUsageRate": 0,\n\t"MoveUsageRate": 0,\n\t"SetupUsageRate": 0,\n\t"@odata.type": "string",\n\t"ReferencedBy@odata.bind": "string",\n\t"References@odata.bind": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Toolings('{ToolingId}')/MPMCompatibilityLinks",
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
