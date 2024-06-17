import { INodeProperties } from "n8n-workflow";

export const PostProcessPlanDescription: INodeProperties[] = [
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
					'POST /ProcessPlans',
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
					'POST /ProcessPlans',
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
				displayName: 'Category',
				name: 'Category',
				description: 'Category - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: '* Context@odata.bind',
				name: 'Context@odata.bind',
				description: 'Context Odata Bind - string',
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
				displayName: 'DocumentDescribeLinks@odata.bind',
				name: 'DocumentDescribeLinks@odata.bind',
				description: 'Document Describe Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'DocumentReferenceLinks@odata.bind',
				name: 'DocumentReferenceLinks@odata.bind',
				description: 'Document Reference Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Folder@odata.bind',
				name: 'Folder@odata.bind',
				description: 'Folder Odata Bind - string',
				type: 'string',
				default: '',
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
				displayName: 'OccurrenceLevel',
				name: 'OccurrenceLevel',
				description: 'Whether Occurrence Level - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'OperationHolderUsageLink@odata.bind',
				name: 'OperationHolderUsageLink@odata.bind',
				description: 'Operation Holder Usage Link Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'OperationUsageLinks@odata.bind',
				name: 'OperationUsageLinks@odata.bind',
				description: 'Operation Usage Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ProcessPlanQuantity',
				name: 'ProcessPlanQuantity',
				description: 'Process Plan Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'ResultedByObjects@odata.bind',
				name: 'ResultedByObjects@odata.bind',
				description: 'Resulted By Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: '* Standard',
				name: 'Standard',
				description: 'Whether Standard - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'StandardProcedureLink@odata.bind',
				name: 'StandardProcedureLink@odata.bind',
				description: 'Standard Procedure Link Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: '* Unit',
				name: 'Unit',
				description: 'Unit - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'View',
				name: 'View',
				description: 'View - string',
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
					'POST /ProcessPlans',
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
		default: '{\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Unit": "string",\n\t"View": "string",\n\t"Name": "string",\n\t"ProcessPlanQuantity": 0,\n\t"Standard": true,\n\t"Number": "string",\n\t"Description": "string",\n\t"OccurrenceLevel": true,\n\t"@odata.type": "string",\n\t"StandardProcedureLink@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"ResultedByObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"OperationUsageLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"OperationHolderUsageLink@odata.bind": [\n\t\t"string"\n\t],\n\t"DocumentDescribeLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"DocumentReferenceLinks@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /ProcessPlans',
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
