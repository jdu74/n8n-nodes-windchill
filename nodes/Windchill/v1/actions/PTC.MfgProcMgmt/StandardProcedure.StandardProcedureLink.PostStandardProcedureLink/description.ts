import { INodeProperties } from "n8n-workflow";

export const StandardProcedureStandardProcedureLinkPostStandardProcedureLinkDescription: INodeProperties[] = [
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
					"POST /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
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
					"POST /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
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
					"POST /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
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
				displayName: 'InsertionOperation',
				name: 'InsertionOperation',
				description: 'Insertion Operation - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lag',
				name: 'Lag',
				description: 'Lag - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t}\n]',
			},
			{
				displayName: 'OperationHolder@odata.bind',
				name: 'OperationHolder@odata.bind',
				description: 'Operation Holder Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ProcessPlan@odata.bind',
				name: 'ProcessPlan@odata.bind',
				description: 'Process Plan Odata Bind - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
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
		default: '{\n\t"Lag": [\n\t\t{\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t}\n\t],\n\t"InsertionOperation": "string",\n\t"@odata.type": "string",\n\t"OperationHolder@odata.bind": "string",\n\t"ProcessPlan@odata.bind": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /StandardProcedures('{StandardProcedureId}')/StandardProcedureLink",
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
