import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardControlCharacteristicActionCheckInWithCheckOutNoteKeepCheckedOutDescription: INodeProperties[] = [
	{
		displayName: 'StandardControlCharacteristicId',
		name: 'StandardControlCharacteristicId-string(path)',
		description: 'Standard Control Characteristic ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
				],
			},
		},
		required: true,
	},
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
					'PTC.Factory',
				],
				operation: [
					"POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
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
					'PTC.Factory',
				],
				operation: [
					"POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
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
					"POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
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
				displayName: 'CheckInNote',
				name: 'CheckInNote',
				description: 'Check In Note - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CheckOutNote',
				name: 'CheckOutNote',
				description: 'Check Out Note - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'KeepCheckedOut',
				name: 'KeepCheckedOut',
				description: 'Whether Keep Checked Out - boolean',
				type: 'boolean',
				default: false,
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
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
		default: '{\n\t"KeepCheckedOut": true,\n\t"CheckInNote": "string",\n\t"CheckOutNote": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"POST /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.CheckIn",
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
