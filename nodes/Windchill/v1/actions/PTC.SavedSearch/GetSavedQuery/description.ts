import { INodeProperties } from "n8n-workflow";

export const GetSavedQueryDescription: INodeProperties[] = [
	{
		displayName: 'SavedQueryId',
		name: 'SavedQueryId-string(path)',
		description: 'Saved Query ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.SavedSearch',
				],
				operation: [
					"GET /SavedQueries('{SavedQueryId}')",
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
					'PTC.SavedSearch',
				],
				operation: [
					"GET /SavedQueries('{SavedQueryId}')",
				],
			},
		},
	},
];
