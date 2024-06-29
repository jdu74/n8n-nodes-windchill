import { INodeProperties } from "n8n-workflow";

export const ActionPostResultForSubTransactionDescription: INodeProperties[] = [
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
					'PTC.ESI',
				],
				operation: [
					'POST /PostResultForSubTransaction',
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
					'PTC.ESI',
				],
				operation: [
					'POST /PostResultForSubTransaction',
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
					'PTC.ESI',
				],
				operation: [
					'POST /PostResultForSubTransaction',
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
				displayName: '* ReleaseResult',
				name: 'ReleaseResult',
				description: 'Release Result - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Message": "string",\n\t\t"ObjectDescription": "string",\n\t\t"Successful": true,\n\t\t"Action": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"TargetID": "string",\n\t\t"ObjectID": "string",\n\t\t"Class": "string"\n\t}\n]',
			},
			{
				displayName: '* TransactionID',
				name: 'TransactionID',
				description: 'Transaction ID - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ESI',
				],
				operation: [
					'POST /PostResultForSubTransaction',
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
		default: '{\n\t"TransactionID": "string",\n\t"ReleaseResult": [\n\t\t{\n\t\t\t"Message": "string",\n\t\t\t"ObjectDescription": "string",\n\t\t\t"Successful": true,\n\t\t\t"Action": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"TargetID": "string",\n\t\t\t"ObjectID": "string",\n\t\t\t"Class": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ESI',
				],
				operation: [
					'POST /PostResultForSubTransaction',
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
