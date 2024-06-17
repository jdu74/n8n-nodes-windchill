import { INodeProperties } from "n8n-workflow";

export const UpdateDepartmentDataDescription: INodeProperties[] = [
	{
		displayName: 'DepartmentDataId',
		name: 'DepartmentDataId-string(path)',
		description: 'Department Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /DepartmentDatas('{DepartmentDataId}')",
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
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /DepartmentDatas('{DepartmentDataId}')",
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
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /DepartmentDatas('{DepartmentDataId}')",
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
				displayName: 'AwaitingPromotion',
				name: 'AwaitingPromotion',
				description: 'Whether Awaiting Promotion - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'CheckinComments',
				name: 'CheckinComments',
				description: 'Checkin Comments - string',
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
				displayName: 'InheritedDomain',
				name: 'InheritedDomain',
				description: 'Whether Inherited Domain - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Note',
				name: 'Note',
				description: 'Note - string',
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
				displayName: 'Status',
				name: 'Status',
				description: 'Status - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Version',
				name: 'Version',
				description: 'Version - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /DepartmentDatas('{DepartmentDataId}')",
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
		default: '{\n\t"Status": "string",\n\t"InheritedDomain": true,\n\t"Note": "string",\n\t"Version": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"AwaitingPromotion": true,\n\t"CheckinComments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /DepartmentDatas('{DepartmentDataId}')",
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
