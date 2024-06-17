import { INodeProperties } from "n8n-workflow";

export const UpdateReferenceDocumentDescription: INodeProperties[] = [
	{
		displayName: 'ReferenceDocumentId',
		name: 'ReferenceDocumentId-string(path)',
		description: 'Reference Document ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"PATCH /ReferenceDocuments('{ReferenceDocumentId}')",
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
					"PATCH /ReferenceDocuments('{ReferenceDocumentId}')",
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
					"PATCH /ReferenceDocuments('{ReferenceDocumentId}')",
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
				displayName: 'ExpressionData',
				name: 'ExpressionData',
				description: 'Expression Data - string',
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
					"PATCH /ReferenceDocuments('{ReferenceDocumentId}')",
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
		default: '{\n\t"ExpressionData": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"PATCH /ReferenceDocuments('{ReferenceDocumentId}')",
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
