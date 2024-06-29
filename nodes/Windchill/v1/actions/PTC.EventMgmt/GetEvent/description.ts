import { INodeProperties } from "n8n-workflow";

export const GetEventDescription: INodeProperties[] = [
	{
		displayName: 'EventId',
		name: 'EventId-string(path)',
		description: 'Event ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.EventMgmt',
				],
				operation: [
					"GET /Events('{EventId}')",
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
					'PTC.EventMgmt',
				],
				operation: [
					"GET /Events('{EventId}')",
				],
			},
		},
	},
];
