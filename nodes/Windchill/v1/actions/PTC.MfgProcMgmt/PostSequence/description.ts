import { INodeProperties } from "n8n-workflow";

export const PostSequenceDescription: INodeProperties[] = [
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
					'POST /Sequences',
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
					'POST /Sequences',
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
				displayName: 'BranchingLag',
				name: 'BranchingLag',
				description: 'Branching Lag - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
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
				displayName: 'ResultedByObjects@odata.bind',
				name: 'ResultedByObjects@odata.bind',
				description: 'Resulted By Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'ReturnLag',
				name: 'ReturnLag',
				description: 'Return Lag - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'ReturnOperation',
				name: 'ReturnOperation',
				description: 'Return Operation - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'StandardProcedureLink@odata.bind',
				name: 'StandardProcedureLink@odata.bind',
				description: 'Standard Procedure Link Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Subtype',
				name: 'Subtype',
				description: 'Subtype - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* Unit',
				name: 'Unit',
				description: 'Unit - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
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
					'POST /Sequences',
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
		default: '{\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"Name": "string",\n\t"Subtype": "string",\n\t"BranchingLag": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"ReturnOperation": "string",\n\t"Number": "string",\n\t"Unit": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"ReturnLag": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Description": "string",\n\t"@odata.type": "string",\n\t"StandardProcedureLink@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"ResultedByObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"OperationUsageLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"OperationHolderUsageLink@odata.bind": [\n\t\t"string"\n\t],\n\t"DocumentDescribeLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"DocumentReferenceLinks@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /Sequences',
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
