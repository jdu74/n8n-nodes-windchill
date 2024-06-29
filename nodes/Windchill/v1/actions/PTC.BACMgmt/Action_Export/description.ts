import { INodeProperties } from "n8n-workflow";

export const ActionExportDescription: INodeProperties[] = [
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
					'PTC.BACMgmt',
				],
				operation: [
					'POST /Export',
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
					'PTC.BACMgmt',
				],
				operation: [
					'POST /Export',
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
					'PTC.BACMgmt',
				],
				operation: [
					'POST /Export',
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
				displayName: 'description',
				name: 'description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* endDate',
				name: 'endDate',
				description: 'End Date - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* name',
				name: 'name',
				description: 'Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* objects',
				name: 'objects',
				description: 'Objects - array',
				type: 'json',
				default: '[\n\t{\n\t\t"type": "string",\n\t\t"identifier": "string"\n\t}\n]',
			},
			{
				displayName: '* startDate',
				name: 'startDate',
				description: 'Start Date - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* types',
				name: 'types',
				description: 'Types - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /Export',
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
		default: '{\n\t"endDate": "string",\n\t"name": "string",\n\t"objects": [\n\t\t{\n\t\t\t"type": "string",\n\t\t\t"identifier": "string"\n\t\t}\n\t],\n\t"types": [\n\t\t"string"\n\t],\n\t"description": "string",\n\t"startDate": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /Export',
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
