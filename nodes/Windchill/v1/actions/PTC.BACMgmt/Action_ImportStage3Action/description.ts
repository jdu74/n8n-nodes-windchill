import { INodeProperties } from "n8n-workflow";

export const ActionImportStage3ActionDescription: INodeProperties[] = [
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
					'POST /ImportStage3Action',
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
					'POST /ImportStage3Action',
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
					'POST /ImportStage3Action',
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
				displayName: '* ContentInfo',
				name: 'ContentInfo',
				description: 'Content Info - array',
				type: 'json',
				default: '[\n\t{\n\t\t"FileSize": 0,\n\t\t"FileName": "string",\n\t\t"PrimaryContent": true,\n\t\t"MimeType": "string",\n\t\t"EncodedInfo": "string",\n\t\t"StreamId": 0\n\t}\n]',
			},
			{
				displayName: '* UseBundledMappings',
				name: 'UseBundledMappings',
				description: 'Whether Use Bundled Mappings - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: '* UseBundledResolutions',
				name: 'UseBundledResolutions',
				description: 'Whether Use Bundled Resolutions - boolean',
				type: 'boolean',
				default: false,
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /ImportStage3Action',
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
		default: '{\n\t"UseBundledMappings": true,\n\t"UseBundledResolutions": true,\n\t"ContentInfo": [\n\t\t{\n\t\t\t"FileSize": 0,\n\t\t\t"FileName": "string",\n\t\t\t"PrimaryContent": true,\n\t\t\t"MimeType": "string",\n\t\t\t"EncodedInfo": "string",\n\t\t\t"StreamId": 0\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
				operation: [
					'POST /ImportStage3Action',
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
