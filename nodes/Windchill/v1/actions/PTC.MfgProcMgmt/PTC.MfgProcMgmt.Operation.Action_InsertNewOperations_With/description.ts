import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationActionInsertNewOperationsWithDescription: INodeProperties[] = [
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
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
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
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
				displayName: '* Operations',
				name: 'Operations',
				description: 'Operations - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Latest": true,\n\t\t"OtherTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"SetupTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CheckoutState": "string",\n\t\t"View": "string",\n\t\t"ModifiedBy": "string",\n\t\t"Version": "string",\n\t\t"LagTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"OutSourced": true,\n\t\t"LastModified": "string",\n\t\t"LaborTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CheckOutStatus": "string",\n\t\t"LifeCycleTemplateName": "string",\n\t\t"FolderName": "string",\n\t\t"ObjectType": "string",\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"DefaultTraceCode": "string",\n\t\t"QueueCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"MoveTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"SubOperationInWorkInstruction": true,\n\t\t"WaitingCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"WorkCentersForLocalization": [\n\t\t\t"string"\n\t\t],\n\t\t"Number": "string",\n\t\t"Unit": "string",\n\t\t"ProcessingTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Comments": "string",\n\t\t"FormulaSetName": "string",\n\t\t"VersionID": "string",\n\t\t"ERPValidationCode": "string",\n\t\t"InspectionInterval": "string",\n\t\t"Category": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"WorkInProgressState": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Name": "string",\n\t\t"OtherCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"TeardownTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ERPSubOperationPublished": true,\n\t\t"Scheduled": true,\n\t\t"InspectionNeeded": true,\n\t\t"CreatedBy": "string",\n\t\t"Revision": "string",\n\t\t"LaborCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"State": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"LongDescription": "string",\n\t\t"QueueTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"FolderLocation": "string",\n\t\t"MoveCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"Description": "string",\n\t\t"Quantity": 0,\n\t\t"WaitingTime": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"CabinetName": "string",\n\t\t"ProcessingCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"SubOperationTimeIncluded": true,\n\t\t"TeardownCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t},\n\t\t"SetupCost": {\n\t\t\t"Precision": 0,\n\t\t\t"Unit": "string",\n\t\t\t"Value": 0,\n\t\t\t"Display": "string"\n\t\t}\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
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
		default: '{\n\t"Operations": [\n\t\t{\n\t\t\t"Latest": true,\n\t\t\t"OtherTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"SetupTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CheckoutState": "string",\n\t\t\t"View": "string",\n\t\t\t"ModifiedBy": "string",\n\t\t\t"Version": "string",\n\t\t\t"LagTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"OutSourced": true,\n\t\t\t"LastModified": "string",\n\t\t\t"LaborTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CheckOutStatus": "string",\n\t\t\t"LifeCycleTemplateName": "string",\n\t\t\t"FolderName": "string",\n\t\t\t"ObjectType": "string",\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"DefaultTraceCode": "string",\n\t\t\t"QueueCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"MoveTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"SubOperationInWorkInstruction": true,\n\t\t\t"WaitingCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"WorkCentersForLocalization": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Number": "string",\n\t\t\t"Unit": "string",\n\t\t\t"ProcessingTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Comments": "string",\n\t\t\t"FormulaSetName": "string",\n\t\t\t"VersionID": "string",\n\t\t\t"ERPValidationCode": "string",\n\t\t\t"InspectionInterval": "string",\n\t\t\t"Category": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"WorkInProgressState": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Name": "string",\n\t\t\t"OtherCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"TeardownTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ERPSubOperationPublished": true,\n\t\t\t"Scheduled": true,\n\t\t\t"InspectionNeeded": true,\n\t\t\t"CreatedBy": "string",\n\t\t\t"Revision": "string",\n\t\t\t"LaborCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"State": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"LongDescription": "string",\n\t\t\t"QueueTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"FolderLocation": "string",\n\t\t\t"MoveCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"Description": "string",\n\t\t\t"Quantity": 0,\n\t\t\t"WaitingTime": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"CabinetName": "string",\n\t\t\t"ProcessingCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"SubOperationTimeIncluded": true,\n\t\t\t"TeardownCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"SetupCost": {\n\t\t\t\t"Precision": 0,\n\t\t\t\t"Unit": "string",\n\t\t\t\t"Value": 0,\n\t\t\t\t"Display": "string"\n\t\t\t}\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"POST /Operations('{OperationId}')/PTC.MfgProcMgmt.InsertNewOperations",
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
