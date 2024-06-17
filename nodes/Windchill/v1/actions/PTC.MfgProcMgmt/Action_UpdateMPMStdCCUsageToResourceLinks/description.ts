import { INodeProperties } from "n8n-workflow";

export const ActionUpdateMpmStdCcUsageToResourceLinksDescription: INodeProperties[] = [
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /UpdateMPMStdCCUsageToResourceLinks',
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /UpdateMPMStdCCUsageToResourceLinks',
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
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /UpdateMPMStdCCUsageToResourceLinks',
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
				displayName: '* StandardCCUsageToResourceLinks',
				name: 'StandardCCUsageToResourceLinks',
				description: 'Standard Cc Usage To Resource Links - array',
				type: 'json',
				default: '[\n\t{\n\t\t"CreatedOn": "string",\n\t\t"ID": "string",\n\t\t"Unit": {\n\t\t\t"Value": "string",\n\t\t\t"Display": "string"\n\t\t},\n\t\t"UsageRate": 0,\n\t\t"stepUsageRate7": 0,\n\t\t"stepUsageRate4": 0,\n\t\t"stepUsageRate2": 0,\n\t\t"allocationNumber": "string",\n\t\t"stepUsageRate5": 0,\n\t\t"Description": "string",\n\t\t"Quantity": 0,\n\t\t"uniqueIdentifier": "string",\n\t\t"LastModified": "string",\n\t\t"stepUsageRate8": 0,\n\t\t"stepUsageRate1": 0,\n\t\t"stepUsageRate3": 0,\n\t\t"stepUsageRate6": 0,\n\t\t"scheduled": true,\n\t\t"ObjectType": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /UpdateMPMStdCCUsageToResourceLinks',
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
		default: '{\n\t"StandardCCUsageToResourceLinks": [\n\t\t{\n\t\t\t"CreatedOn": "string",\n\t\t\t"ID": "string",\n\t\t\t"Unit": {\n\t\t\t\t"Value": "string",\n\t\t\t\t"Display": "string"\n\t\t\t},\n\t\t\t"UsageRate": 0,\n\t\t\t"stepUsageRate7": 0,\n\t\t\t"stepUsageRate4": 0,\n\t\t\t"stepUsageRate2": 0,\n\t\t\t"allocationNumber": "string",\n\t\t\t"stepUsageRate5": 0,\n\t\t\t"Description": "string",\n\t\t\t"Quantity": 0,\n\t\t\t"uniqueIdentifier": "string",\n\t\t\t"LastModified": "string",\n\t\t\t"stepUsageRate8": 0,\n\t\t\t"stepUsageRate1": 0,\n\t\t\t"stepUsageRate3": 0,\n\t\t\t"stepUsageRate6": 0,\n\t\t\t"scheduled": true,\n\t\t\t"ObjectType": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					'POST /UpdateMPMStdCCUsageToResourceLinks',
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
