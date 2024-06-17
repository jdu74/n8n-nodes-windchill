import { INodeProperties } from "n8n-workflow";

export const UpdateProcessMaterialDescription: INodeProperties[] = [
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
					"PATCH /ProcessMaterials('{ProcessMaterialId}')",
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
					"PATCH /ProcessMaterials('{ProcessMaterialId}')",
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
					"PATCH /ProcessMaterials('{ProcessMaterialId}')",
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
				displayName: 'Category',
				name: 'Category',
				description: 'Category - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'DimensionX',
				name: 'DimensionX',
				description: 'Dimension X - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DimensionY',
				name: 'DimensionY',
				description: 'Dimension Y - object',
				type: 'json',
				default: '{\n\t"Precision": 0,\n\t"Unit": "string",\n\t"Value": 0,\n\t"Display": "string"\n}',
			},
			{
				displayName: 'DimensionZ',
				name: 'DimensionZ',
				description: 'Dimension Z - object',
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
				displayName: 'Source',
				name: 'Source',
				description: 'Source - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Usage',
				name: 'Usage',
				description: 'Usage - object',
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
					"PATCH /ProcessMaterials('{ProcessMaterialId}')",
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
		default: '{\n\t"DimensionZ": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DimensionY": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"DimensionX": {\n\t\t"Precision": 0,\n\t\t"Unit": "string",\n\t\t"Value": 0,\n\t\t"Display": "string"\n\t},\n\t"Category": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"Name": "string",\n\t"Source": "string",\n\t"Usage": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"Number": "string",\n\t"Description": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"PATCH /ProcessMaterials('{ProcessMaterialId}')",
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
