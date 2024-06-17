import { INodeProperties } from "n8n-workflow";

export const ActionSetStateStandardControlCharacteristicsDescription: INodeProperties[] = [
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
					'PTC.Factory',
				],
				operation: [
					'POST /SetStateStandardControlCharacteristics',
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
					'POST /SetStateStandardControlCharacteristics',
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
					'POST /SetStateStandardControlCharacteristics',
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
				displayName: '* StandardControlCharacteristics',
				name: 'StandardControlCharacteristics',
				description: 'Standard Control Characteristics - array',
				type: 'json',
				default: '[\n\t{\n\t\t"ModifiedBy": "string",\n\t\t"Status": "string",\n\t\t"UpperLimit": "string",\n\t\t"BOMType": "string",\n\t\t"Severity": "string",\n\t\t"CheckoutState": "string",\n\t\t"Category": "string",\n\t\t"WorkInProgressState": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"View": "string",\n\t\t"Name": "string",\n\t\t"Version": "string",\n\t\t"CreatedBy": "string",\n\t\t"Location": "string",\n\t\t"NominalValue": "string",\n\t\t"Note": "string",\n\t\t"LastModified": "string",\n\t\t"Owner": "string",\n\t\t"EpmMasterReference": "string",\n\t\t"CheckOutStatus": "string",\n\t\t"Revision": "string",\n\t\t"LifeCycleTemplateName": "string",\n\t\t"LifeCycleTemplate": "string",\n\t\t"CheckedOutBy": "string",\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"ShortDescription": "string",\n\t\t"Number": "string",\n\t\t"AlternateNumber": "string",\n\t\t"ModelItemUID": "string",\n\t\t"TeamTemplate": "string",\n\t\t"Description": "string",\n\t\t"AwaitingPromotion": true,\n\t\t"ControlReference": "string",\n\t\t"Comments": "string",\n\t\t"Context": "string",\n\t\t"LowerLimit": "string",\n\t\t"State": "string",\n\t\t"Latest": true,\n\t\t"VersionID": "string",\n\t\t"CheckinComments": "string"\n\t}\n]',
			},
			{
				displayName: '* State',
				name: 'State',
				description: 'State - object',
				type: 'json',
				default: '{\n\t"Value": "string",\n\t"Display": "string"\n}',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					'POST /SetStateStandardControlCharacteristics',
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
		default: '{\n\t"StandardControlCharacteristics": [\n\t\t{\n\t\t\t"ModifiedBy": "string",\n\t\t\t"Status": "string",\n\t\t\t"UpperLimit": "string",\n\t\t\t"BOMType": "string",\n\t\t\t"Severity": "string",\n\t\t\t"CheckoutState": "string",\n\t\t\t"Category": "string",\n\t\t\t"WorkInProgressState": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"View": "string",\n\t\t\t"Name": "string",\n\t\t\t"Version": "string",\n\t\t\t"CreatedBy": "string",\n\t\t\t"Location": "string",\n\t\t\t"NominalValue": "string",\n\t\t\t"Note": "string",\n\t\t\t"LastModified": "string",\n\t\t\t"Owner": "string",\n\t\t\t"EpmMasterReference": "string",\n\t\t\t"CheckOutStatus": "string",\n\t\t\t"Revision": "string",\n\t\t\t"LifeCycleTemplateName": "string",\n\t\t\t"LifeCycleTemplate": "string",\n\t\t\t"CheckedOutBy": "string",\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"ShortDescription": "string",\n\t\t\t"Number": "string",\n\t\t\t"AlternateNumber": "string",\n\t\t\t"ModelItemUID": "string",\n\t\t\t"TeamTemplate": "string",\n\t\t\t"Description": "string",\n\t\t\t"AwaitingPromotion": true,\n\t\t\t"ControlReference": "string",\n\t\t\t"Comments": "string",\n\t\t\t"Context": "string",\n\t\t\t"LowerLimit": "string",\n\t\t\t"State": "string",\n\t\t\t"Latest": true,\n\t\t\t"VersionID": "string",\n\t\t\t"CheckinComments": "string"\n\t\t}\n\t],\n\t"State": {\n\t\t"Value": "string",\n\t\t"Display": "string"\n\t}\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					'POST /SetStateStandardControlCharacteristics',
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
