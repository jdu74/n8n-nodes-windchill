import { INodeProperties } from "n8n-workflow";

export const PostDocumentDescription: INodeProperties[] = [
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
					'PTC.DocMgmt',
				],
				operation: [
					'POST /Documents',
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
					'PTC.DocMgmt',
				],
				operation: [
					'POST /Documents',
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
				displayName: 'Attachments@odata.bind',
				name: 'Attachments@odata.bind',
				description: 'Attachments Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
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
				displayName: 'Folder@odata.bind',
				name: 'Folder@odata.bind',
				description: 'Folder Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* Name',
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
				displayName: 'PrimaryContent@odata.bind',
				name: 'PrimaryContent@odata.bind',
				description: 'Primary Content Odata Bind - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'SmallThumbnails@odata.bind',
				name: 'SmallThumbnails@odata.bind',
				description: 'Small Thumbnails Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Thumbnails@odata.bind',
				name: 'Thumbnails@odata.bind',
				description: 'Thumbnails Odata Bind - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: 'Title',
				name: 'Title',
				description: 'Title - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
				operation: [
					'POST /Documents',
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
		default: '{\n\t"Title": "string",\n\t"Number": "string",\n\t"Description": "string",\n\t"Name": "string",\n\t"@odata.type": "string",\n\t"SmallThumbnails@odata.bind": [\n\t\t"string"\n\t],\n\t"PrimaryContent@odata.bind": "string",\n\t"Thumbnails@odata.bind": [\n\t\t"string"\n\t],\n\t"Context@odata.bind": "string",\n\t"Folder@odata.bind": "string",\n\t"Attachments@odata.bind": [\n\t\t"string"\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.DocMgmt',
				],
				operation: [
					'POST /Documents',
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
