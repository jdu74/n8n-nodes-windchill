import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtProcessPlanActionCreateMpmStandardProcedureLinksWithDescription: INodeProperties[] = [
	{
		displayName: 'ProcessPlanId',
		name: 'ProcessPlanId-string(path)',
		description: 'Process Plan ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
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
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
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
				displayName: 'StandardProcedureLink',
				name: 'StandardProcedureLink',
				description: 'Standard Procedure Link - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Lag": [\n\t\t\t{\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t}\n\t\t],\n\t\t"InsertionOperation": "string",\n\t\t"@odata.type": "string",\n\t\t"OperationHolder@odata.bind": "string",\n\t\t"ProcessPlan@odata.bind": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
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
		default: '{\n\t"StandardProcedureLink": [\n\t\t{\n\t\t\t"Lag": [\n\t\t\t\t{\n\t\t\t\t\t"Precision": 0,\n\t\t\t\t\t"Unit": "string",\n\t\t\t\t\t"Value": 0,\n\t\t\t\t\t"Display": "string"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"InsertionOperation": "string",\n\t\t\t"@odata.type": "string",\n\t\t\t"OperationHolder@odata.bind": "string",\n\t\t\t"ProcessPlan@odata.bind": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /ProcessPlans('{ProcessPlanId}')/PTC.MfgProcMgmt.CreateMPMStandardProcedureLinks",
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
