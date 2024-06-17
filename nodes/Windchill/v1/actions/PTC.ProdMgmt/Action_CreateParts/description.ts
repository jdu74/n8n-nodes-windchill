import { INodeProperties } from "n8n-workflow";

export const ActionCreatePartsDescription: INodeProperties[] = [
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
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /CreateParts',
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
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /CreateParts',
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
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /CreateParts',
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
				displayName: '* Parts',
				name: 'Parts',
				description: 'Parts - array',
				type: 'json',
				default: '[\n\t{\n\t\t"View": "string",\n\t\t"Source": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"DefaultUnit": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"EndItem": true,\n\t\t"DefaultTraceCode": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"GatheringPart": true,\n\t\t"Number": "string",\n\t\t"PhantomManufacturingPart": true,\n\t\t"Name": "string",\n\t\t"AssemblyMode": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"ConfigurableModule": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"@odata.type": "string",\n\t\t"Uses@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"DescribedBy@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"References@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"PartDocAssociations@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Context@odata.bind": "string",\n\t\t"SmallThumbnails@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Thumbnails@odata.bind": [\n\t\t\t"string"\n\t\t],\n\t\t"Folder@odata.bind": "string",\n\t\t"Attachments@odata.bind": [\n\t\t\t"string"\n\t\t]\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /CreateParts',
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
		default: '{\n\t"Parts": [\n\t\t{\n\t\t\t"View": "string",\n\t\t\t"Source": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"DefaultUnit": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"EndItem": true,\n\t\t\t"DefaultTraceCode": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"GatheringPart": true,\n\t\t\t"Number": "string",\n\t\t\t"PhantomManufacturingPart": true,\n\t\t\t"Name": "string",\n\t\t\t"AssemblyMode": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"ConfigurableModule": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"@odata.type": "string",\n\t\t\t"Uses@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"DescribedBy@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"References@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"PartDocAssociations@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Context@odata.bind": "string",\n\t\t\t"SmallThumbnails@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Thumbnails@odata.bind": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Folder@odata.bind": "string",\n\t\t\t"Attachments@odata.bind": [\n\t\t\t\t"string"\n\t\t\t]\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ProdMgmt',
				],
				operation: [
					'POST /CreateParts',
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
