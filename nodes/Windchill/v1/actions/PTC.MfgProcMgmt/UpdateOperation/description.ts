import { INodeProperties } from "n8n-workflow";

export const UpdateOperationDescription: INodeProperties[] = [
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
					"PATCH /Operations('{OperationId}')",
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
					"PATCH /Operations('{OperationId}')",
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
					"PATCH /Operations('{OperationId}')",
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
				displayName: 'DefaultTraceCode',
				name: 'DefaultTraceCode',
				description: 'Default Trace Code - string',
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
				displayName: 'ERPSubOperationPublished',
				name: 'ERPSubOperationPublished',
				description: 'Whether Erp Sub Operation Published - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'ERPValidationCode',
				name: 'ERPValidationCode',
				description: 'Erp Validation Code - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'FormulaSetName',
				name: 'FormulaSetName',
				description: 'Formula Set Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'InspectionInterval',
				name: 'InspectionInterval',
				description: 'Inspection Interval - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'InspectionNeeded',
				name: 'InspectionNeeded',
				description: 'Whether Inspection Needed - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'LaborCost',
				name: 'LaborCost',
				description: 'Labor Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'LaborTime',
				name: 'LaborTime',
				description: 'Labor Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'LagTime',
				name: 'LagTime',
				description: 'Lag Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'LongDescription',
				name: 'LongDescription',
				description: 'Long Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'MoveCost',
				name: 'MoveCost',
				description: 'Move Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'MoveTime',
				name: 'MoveTime',
				description: 'Move Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Name',
				name: 'Name',
				description: 'Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Number',
				name: 'Number',
				description: 'Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'OtherCost',
				name: 'OtherCost',
				description: 'Other Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'OtherTime',
				name: 'OtherTime',
				description: 'Other Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'OutSourced',
				name: 'OutSourced',
				description: 'Whether Out Sourced - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'ProcessingCost',
				name: 'ProcessingCost',
				description: 'Processing Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'ProcessingTime',
				name: 'ProcessingTime',
				description: 'Processing Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Quantity',
				name: 'Quantity',
				description: 'Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'QueueCost',
				name: 'QueueCost',
				description: 'Queue Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'QueueTime',
				name: 'QueueTime',
				description: 'Queue Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Scheduled',
				name: 'Scheduled',
				description: 'Whether Scheduled - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'SetupCost',
				name: 'SetupCost',
				description: 'Setup Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'SetupTime',
				name: 'SetupTime',
				description: 'Setup Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'SubOperationInWorkInstruction',
				name: 'SubOperationInWorkInstruction',
				description: 'Whether Sub Operation In Work Instruction - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'SubOperationTimeIncluded',
				name: 'SubOperationTimeIncluded',
				description: 'Whether Sub Operation Time Included - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'TeardownCost',
				name: 'TeardownCost',
				description: 'Teardown Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'TeardownTime',
				name: 'TeardownTime',
				description: 'Teardown Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'View',
				name: 'View',
				description: 'View - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'WaitingCost',
				name: 'WaitingCost',
				description: 'Waiting Cost - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'WaitingTime',
				name: 'WaitingTime',
				description: 'Waiting Time - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Operations('{OperationId}')",
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
		default: '{\n\t"OtherTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"SetupTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"LagTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"OutSourced": true,\n\t"LaborTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DefaultTraceCode": "string",\n\t"QueueCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"MoveTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"SubOperationInWorkInstruction": true,\n\t"WaitingCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Number": "string",\n\t"ProcessingTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"FormulaSetName": "string",\n\t"ERPValidationCode": "string",\n\t"InspectionInterval": "string",\n\t"Name": "string",\n\t"OtherCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"TeardownTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"ERPSubOperationPublished": true,\n\t"Scheduled": true,\n\t"InspectionNeeded": true,\n\t"LaborCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"LongDescription": "string",\n\t"QueueTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"MoveCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"Quantity": 0,\n\t"WaitingTime": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"ProcessingCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"SubOperationTimeIncluded": true,\n\t"TeardownCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"SetupCost": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /Operations('{OperationId}')",
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
