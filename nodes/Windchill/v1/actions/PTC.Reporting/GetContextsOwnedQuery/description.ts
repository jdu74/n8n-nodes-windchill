import { INodeProperties } from "n8n-workflow";

export const GetContextsOwnedQueryDescription: INodeProperties[] = [
	{
		displayName: 'ContextsOwnedQueryId',
		name: 'ContextsOwnedQueryId-string(path)',
		description: 'Contexts Owned Query ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Reporting',
				],
				operation: [
					"GET /ContextsOwnedQuerys('{ContextsOwnedQueryId}')",
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
					'PTC.Reporting',
				],
				operation: [
					"GET /ContextsOwnedQuerys('{ContextsOwnedQueryId}')",
				],
			},
		},
	},
];
