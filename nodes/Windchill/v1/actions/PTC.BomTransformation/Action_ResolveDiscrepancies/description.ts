import { INodeProperties } from "n8n-workflow";

export const ActionResolveDiscrepanciesDescription: INodeProperties[] = [
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /ResolveDiscrepancies',
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /ResolveDiscrepancies',
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
					'PTC.BomTransformation',
				],
				operation: [
					'POST /ResolveDiscrepancies',
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
				displayName: 'ChangeOid',
				name: 'ChangeOid',
				description: 'Change Oid - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'CheckInDownstreamObject',
				name: 'CheckInDownstreamObject',
				description: 'Whether Check In Downstream Object - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: '* DiscrepancyContext',
				name: 'DiscrepancyContext',
				description: 'Discrepancy Context - object',
				type: 'json',
				default: '{\n\t"UpstreamChangeOid": "string",\n\t"SourcePartSelection": [\n\t\t{\n\t\t\t"Path": "string"\n\t\t}\n\t],\n\t"TargetPath": "string"\n}',
			},
			{
				displayName: '* DiscrepancyItems',
				name: 'DiscrepancyItems',
				description: 'Discrepancy Items - array',
				type: 'json',
				default: '[\n\t{\n\t\t"DownstreamParentPath": [\n\t\t\t"string"\n\t\t],\n\t\t"Status": "string",\n\t\t"Version": "string",\n\t\t"CurrentValue": "string",\n\t\t"InternalMetadata": "string",\n\t\t"Number": "string",\n\t\t"Name": "string",\n\t\t"PreviousValue": "string",\n\t\t"Identity": "string",\n\t\t"Criteria": "string"\n\t}\n]',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /ResolveDiscrepancies',
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
		default: '{\n\t"ChangeOid": "string",\n\t"DiscrepancyContext": {\n\t\t"UpstreamChangeOid": "string",\n\t\t"SourcePartSelection": [\n\t\t\t{\n\t\t\t\t"Path": "string"\n\t\t\t}\n\t\t],\n\t\t"TargetPath": "string"\n\t},\n\t"CheckInDownstreamObject": true,\n\t"DiscrepancyItems": [\n\t\t{\n\t\t\t"DownstreamParentPath": [\n\t\t\t\t"string"\n\t\t\t],\n\t\t\t"Status": "string",\n\t\t\t"Version": "string",\n\t\t\t"CurrentValue": "string",\n\t\t\t"InternalMetadata": "string",\n\t\t\t"Number": "string",\n\t\t\t"Name": "string",\n\t\t\t"PreviousValue": "string",\n\t\t\t"Identity": "string",\n\t\t\t"Criteria": "string"\n\t\t}\n\t]\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.BomTransformation',
				],
				operation: [
					'POST /ResolveDiscrepancies',
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
