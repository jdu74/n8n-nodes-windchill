import { INodeProperties } from "n8n-workflow";

export const OperationOperationToConsumableLinksPostOperationToConsumableLinkDescription: INodeProperties[] = [
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
					"POST /Operations('{OperationId}')/OperationToConsumableLinks",
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
					"POST /Operations('{OperationId}')/OperationToConsumableLinks",
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
					"POST /Operations('{OperationId}')/OperationToConsumableLinks",
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
				displayName: 'allocationNumber',
				name: 'allocationNumber',
				description: 'Allocation Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* ConsumableResource@odata.bind',
				name: 'ConsumableResource@odata.bind',
				description: 'Consumable Resource Odata Bind - string',
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
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: '* ReferencedBy@odata.bind',
				name: 'ReferencedBy@odata.bind',
				description: 'Referenced By Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'scheduled',
				name: 'scheduled',
				description: 'Whether Scheduled - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'stepUsageRate1',
				name: 'stepUsageRate1',
				description: 'Step Usage Rate1 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate2',
				name: 'stepUsageRate2',
				description: 'Step Usage Rate2 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate3',
				name: 'stepUsageRate3',
				description: 'Step Usage Rate3 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate4',
				name: 'stepUsageRate4',
				description: 'Step Usage Rate4 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate5',
				name: 'stepUsageRate5',
				description: 'Step Usage Rate5 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate6',
				name: 'stepUsageRate6',
				description: 'Step Usage Rate6 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate7',
				name: 'stepUsageRate7',
				description: 'Step Usage Rate7 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'stepUsageRate8',
				name: 'stepUsageRate8',
				description: 'Step Usage Rate8 - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'UsageRate',
				name: 'UsageRate',
				description: 'Usage Rate - number',
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
					"POST /Operations('{OperationId}')/OperationToConsumableLinks",
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
		default: '{\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"UsageRate": 0,\n\t"stepUsageRate7": 0,\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"stepUsageRate4": 0,\n\t"stepUsageRate2": 0,\n\t"allocationNumber": "string",\n\t"stepUsageRate5": 0,\n\t"Description": "string",\n\t"Quantity": 0,\n\t"stepUsageRate8": 0,\n\t"stepUsageRate1": 0,\n\t"stepUsageRate3": 0,\n\t"stepUsageRate6": 0,\n\t"scheduled": true,\n\t"@odata.type": "string",\n\t"ReferencedBy@odata.bind": "string",\n\t"ConsumableResource@odata.bind": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/OperationToConsumableLinks",
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
