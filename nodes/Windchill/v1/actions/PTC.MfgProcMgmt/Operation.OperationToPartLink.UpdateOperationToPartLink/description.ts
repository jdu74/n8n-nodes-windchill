import { INodeProperties } from "n8n-workflow";

export const OperationOperationToPartLinkUpdateOperationToPartLinkDescription: INodeProperties[] = [
	{
		displayName: 'OperationId',
		name: 'OperationId-string(path)',
		description: 'Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'OperationToPartLinkId',
		name: 'OperationToPartLinkId-string(path)',
		description: 'Operation To Part Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
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
					"PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
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
					"PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
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
				displayName: 'AllocationSequence',
				name: 'AllocationSequence',
				description: 'Allocation Sequence - integer',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'AllocationType',
				name: 'AllocationType',
				description: 'Allocation Type - string',
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
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'UsageIdPath',
				name: 'UsageIdPath',
				description: 'Usage ID Path - string',
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
					"PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
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
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"AllocationType": "string",\n\t"AllocationSequence": 0,\n\t"Description": "string",\n\t"UsageIdPath": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Operations('{OperationId}')/OperationToPartLink('{OperationToPartLinkId}')",
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
