import { INodeProperties } from "n8n-workflow";

export const DocumentVersionsPostDocumentDescription: INodeProperties[] = [
	{
		displayName: 'DocumentId',
		name: 'DocumentId-string(path)',
		description: 'Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /Documents('{DocumentId}')/Versions",
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
					'PTC.Factory',
				],
				operation: [
					"POST /Documents('{DocumentId}')/Versions",
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
					'PTC.Factory',
				],
				operation: [
					"POST /Documents('{DocumentId}')/Versions",
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
					'PTC.Factory',
				],
				operation: [
					"POST /Documents('{DocumentId}')/Versions",
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
		default: '{\n\t"Number": "string",\n\t"Name": "string",\n\t"Description": "string",\n\t"Title": "string",\n\t"@odata.type": "string",\n\t"Context@odata.bind": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /Documents('{DocumentId}')/Versions",
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
