import { INodeProperties } from "n8n-workflow";

export const ActionPostResultForTransactionDescription: INodeProperties[] = [
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
					'POST /PostResultForTransaction',
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
					'POST /PostResultForTransaction',
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
					'POST /PostResultForTransaction',
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
				displayName: 'Message',
				name: 'Message',
				description: 'Message - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* PrimaryBuisnessObjectID',
				name: 'PrimaryBuisnessObjectID',
				description: 'Primary Buisness Object ID - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* Successful',
				name: 'Successful',
				description: 'Whether Successful - boolean',
				type: 'boolean',
				default: false,
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
					'POST /PostResultForTransaction',
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
		default: '{\n\t"Message": "string",\n\t"PrimaryBuisnessObjectID": "string",\n\t"TransactionID": "string",\n\t"Successful": true\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ESI',
				],
				operation: [
					'POST /PostResultForTransaction',
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
