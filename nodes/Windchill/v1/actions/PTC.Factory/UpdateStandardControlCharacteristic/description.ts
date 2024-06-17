import { INodeProperties } from "n8n-workflow";

export const UpdateStandardControlCharacteristicDescription: INodeProperties[] = [
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
					"PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
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
					"PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
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
					"PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
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
				displayName: 'AlternateNumber',
				name: 'AlternateNumber',
				description: 'Alternate Number - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'AwaitingPromotion',
				name: 'AwaitingPromotion',
				description: 'Whether Awaiting Promotion - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'BOMType',
				name: 'BOMType',
				description: 'Bom Type - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category',
				name: 'Category',
				description: 'Category - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CheckedOutBy',
				name: 'CheckedOutBy',
				description: 'Checked Out By - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CheckinComments',
				name: 'CheckinComments',
				description: 'Checkin Comments - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Context',
				name: 'Context',
				description: 'Context - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ControlReference',
				name: 'ControlReference',
				description: 'Control Reference - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CreatedBy',
				name: 'CreatedBy',
				description: 'Created By - string',
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
				displayName: 'EpmMasterReference',
				name: 'EpmMasterReference',
				description: 'Epm Master Reference - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Latest',
				name: 'Latest',
				description: 'Whether Latest - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'LifeCycleTemplate',
				name: 'LifeCycleTemplate',
				description: 'Life Cycle Template - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Location',
				name: 'Location',
				description: 'Location - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'LowerLimit',
				name: 'LowerLimit',
				description: 'Lower Limit - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ModelItemUID',
				name: 'ModelItemUID',
				description: 'Model Item Uid - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ModifiedBy',
				name: 'ModifiedBy',
				description: 'Modified By - string',
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
				displayName: 'NominalValue',
				name: 'NominalValue',
				description: 'Nominal Value - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note',
				name: 'Note',
				description: 'Note - string',
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
				displayName: 'Owner',
				name: 'Owner',
				description: 'Owner - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Severity',
				name: 'Severity',
				description: 'Severity - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ShortDescription',
				name: 'ShortDescription',
				description: 'Short Description - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'State',
				name: 'State',
				description: 'State - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'Status',
				description: 'Status - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'TeamTemplate',
				name: 'TeamTemplate',
				description: 'Team Template - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'UpperLimit',
				name: 'UpperLimit',
				description: 'Upper Limit - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'View',
				name: 'View',
				description: 'View - string',
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
					"PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
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
		default: '{\n\t"ModifiedBy": "string",\n\t"Status": "string",\n\t"UpperLimit": "string",\n\t"BOMType": "string",\n\t"Severity": "string",\n\t"Category": "string",\n\t"View": "string",\n\t"Name": "string",\n\t"CreatedBy": "string",\n\t"Location": "string",\n\t"NominalValue": "string",\n\t"Note": "string",\n\t"Owner": "string",\n\t"EpmMasterReference": "string",\n\t"LifeCycleTemplate": "string",\n\t"CheckedOutBy": "string",\n\t"ShortDescription": "string",\n\t"Number": "string",\n\t"AlternateNumber": "string",\n\t"ModelItemUID": "string",\n\t"TeamTemplate": "string",\n\t"Description": "string",\n\t"AwaitingPromotion": true,\n\t"ControlReference": "string",\n\t"Context": "string",\n\t"LowerLimit": "string",\n\t"State": "string",\n\t"Latest": true,\n\t"CheckinComments": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"PATCH /StandardControlCharacteristics('{StandardControlCharacteristicId}')",
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
