import { INodeProperties } from "n8n-workflow";

export const ActionDownloadContentAsZipDescription: INodeProperties[] = [
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
					'PTC',
				],
				operation: [
					'POST /DownloadContentAsZip',
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
					'PTC',
				],
				operation: [
					'POST /DownloadContentAsZip',
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
					'PTC',
				],
				operation: [
					'POST /DownloadContentAsZip',
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
				displayName: '* DownloadContentInfos',
				name: 'DownloadContentInfos',
				description: 'Download Content Infos - array',
				type: 'json',
				default: '[\n\t{\n\t\t"ContentFormatFilter": [\n\t\t\t"string"\n\t\t],\n\t\t"EntityVersion": 0,\n\t\t"ContentNavigationProperty": [\n\t\t\t"string"\n\t\t],\n\t\t"ContentNameSuffix": "string",\n\t\t"ContentHolder@odata.bind": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					'POST /DownloadContentAsZip',
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
		default: '{\n\t"DownloadContentInfos": [\n\t\t{\n\t\t\t"ContentFormatFilter": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"EntityVersion": 0,\n\t\t\t"ContentNavigationProperty": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"ContentNameSuffix": "string",\n\t\t\t"ContentHolder@odata.bind": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC',
				],
				operation: [
					'POST /DownloadContentAsZip',
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
