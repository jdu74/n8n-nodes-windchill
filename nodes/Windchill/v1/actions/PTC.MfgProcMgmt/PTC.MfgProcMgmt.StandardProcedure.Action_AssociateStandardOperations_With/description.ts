import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtStandardProcedureActionAssociateStandardOperationsWithDescription: INodeProperties[] = [
	{
		displayName: 'StandardProcedureId',
		name: 'StandardProcedureId-string(path)',
		description: 'Standard Procedure ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
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
					"POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
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
					"POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
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
					"POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
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
				displayName: 'OperationUsageLink',
				name: 'OperationUsageLink',
				description: 'Operation Usage Link - array',
				type: 'json',
				default: '[\n\t{\n\t\t"OperationLabel": "string",\n\t\t"@odata.type": "string",\n\t\t"OperationHolder@odata.bind": "string",\n\t\t"Operation@odata.bind": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
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
		default: '{\n\t"OperationUsageLink": [\n\t\t{\n\t\t\t"OperationLabel": "string",\n\t\t\t"@odata.type": "string",\n\t\t\t"OperationHolder@odata.bind": "string",\n\t\t\t"Operation@odata.bind": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /StandardProcedures('{StandardProcedureId}')/PTC.MfgProcMgmt.AssociateStandardOperations",
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
