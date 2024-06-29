import { INodeProperties } from "n8n-workflow";

export const AuditRecordEventInfoGetEventInfoDescription: INodeProperties[] = [
	{
		displayName: 'AuditRecordId',
		name: 'AuditRecordId-string(path)',
		description: 'Audit Record ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
				operation: [
					"GET /AuditRecords('{AuditRecordId}')/EventInfo",
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
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Administration',
				],
				operation: [
					"GET /AuditRecords('{AuditRecordId}')/EventInfo",
				],
			},
		},
	},
];
