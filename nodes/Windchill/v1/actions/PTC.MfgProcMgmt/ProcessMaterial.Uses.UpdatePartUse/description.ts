import { INodeProperties } from "n8n-workflow";

export const ProcessMaterialUsesUpdatePartUseDescription: INodeProperties[] = [
	{
		displayName: 'ProcessMaterialId',
		name: 'ProcessMaterialId-string(path)',
		description: 'Process Material ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'PartUseId',
		name: 'PartUseId-string(path)',
		description: 'Part Use ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
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
					"PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
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
					"PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
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
				displayName: 'FindNumber',
				name: 'FindNumber',
				description: 'Find Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LineNumber',
				name: 'LineNumber',
				description: 'Line Number - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'TraceCode',
				name: 'TraceCode',
				description: 'Trace Code - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
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
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Quantity": 0,\n\t"TraceCode": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"FindNumber": "string",\n\t"LineNumber": 0\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /ProcessMaterials('{ProcessMaterialId}')/Uses('{PartUseId}')",
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
