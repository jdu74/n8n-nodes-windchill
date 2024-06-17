import { INodeProperties } from "n8n-workflow";

export const PostStandardCcDescription: INodeProperties[] = [
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
					'POST /StandardCCs',
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
					'POST /StandardCCs',
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
				displayName: 'LongDescription',
				name: 'LongDescription',
				description: 'Long Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LowerLimit',
				name: 'LowerLimit',
				description: 'Lower Limit - string',
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
				displayName: 'NominalValue',
				name: 'NominalValue',
				description: 'Nominal Value - string',
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
				displayName: 'ResultedByObjects@odata.bind',
				name: 'ResultedByObjects@odata.bind',
				description: 'Resulted By Objects Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'StandardCCToProcessPlanLinks@odata.bind',
				name: 'StandardCCToProcessPlanLinks@odata.bind',
				description: 'Standard Cc To Process Plan Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'StandardCCToResourceLinks@odata.bind',
				name: 'StandardCCToResourceLinks@odata.bind',
				description: 'Standard Cc To Resource Links Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'UpperLimit',
				name: 'UpperLimit',
				description: 'Upper Limit - string',
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
					'POST /StandardCCs',
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
		default: '{\n\t"UpperLimit": "string",\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"Name": "string",\n\t"NominalValue": "string",\n\t"LongDescription": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"LowerLimit": "string",\n\t"@odata.type": "string",\n\t"StandardCCToProcessPlanLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"StandardCCToResourceLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"ResultedByObjects@odata.bind": [\n\t\t"string"\n\t],\n\t"DocumentDescribeLinks@odata.bind": [\n\t\t"string"\n\t],\n\t"DocumentReferenceLinks@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /StandardCCs',
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
