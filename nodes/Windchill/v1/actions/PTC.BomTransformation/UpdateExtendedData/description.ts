import { INodeProperties } from "n8n-workflow";

export const UpdateExtendedDataDescription: INodeProperties[] = [
	{
		displayName: 'ExtendedDataId',
		name: 'ExtendedDataId-string(path)',
		description: 'Extended Data ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /ExtendedDatas('{ExtendedDataId}')",
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
					"PATCH /ExtendedDatas('{ExtendedDataId}')",
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
					"PATCH /ExtendedDatas('{ExtendedDataId}')",
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
				displayName: 'AlternateNumber',
				name: 'AlternateNumber',
				description: 'Alternate Number - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
			{
				displayName: 'AwaitingPromotion',
				name: 'AwaitingPromotion',
				description: 'Whether Awaiting Promotion - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'BOMType',
				name: 'BOMType',
				description: 'Bom Type - object',
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
				displayName: 'LifeCycleState',
				name: 'LifeCycleState',
				description: 'Life Cycle State - string',
				type: 'string',
				default: '',
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
				displayName: 'StorageLocation',
				name: 'StorageLocation',
				description: 'Storage Location - string',
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
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /ExtendedDatas('{ExtendedDataId}')",
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
		default: '{\n\t"AlternateNumber": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"BOMType": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t},\n\t"View": "string",\n\t"Note": "string",\n\t"Version": "string",\n\t"LifeCycleState": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"AwaitingPromotion": true,\n\t"StorageLocation": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					"PATCH /ExtendedDatas('{ExtendedDataId}')",
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
